const debug = require('debug')('ws-nodejs-re:server');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorHandler = require('express-error-handler');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const models = require('./models');
const serverHelper = require('./helpers/server_helper');

const app = express();
const router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// routes setup
router.get('/:uid', async (req, res) => {
  const user = await models.User.findOne({ where: { id: parseInt(req.params.uid, 10) } });

  if (user) {
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return res.status(200).json(data);
  }

  return res.status(404).send('User not found (1469551345)');
});
app.use('/users/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Get port from environment and store in Express.
 */
const port = serverHelper.normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// Log the error
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  next(err);
});

app.use(errorHandler());

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const addr = server.address();
  const bind = typeof port === 'string' ? `Pipe ${addr}` : `Port ${addr.port}`;

  // handle specific listen errors with friendly messages
  /* eslint-disable */
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
  /* eslint-enable */
});
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
});

module.exports = app;

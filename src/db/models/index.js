const fs = require('fs');

const path = require('path');

const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';

const configJSON = require('../config/config.json');

const config = configJSON[`${env}`];

const db = {};

let sequelize;

const opts = {
  freezeTableName: true,
};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config, opts);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, opts);
}


fs
  .readdirSync('./src/db/models').filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[`${modelName}`].associate) {
    db[`${modelName}`].associate(db);
  }
});

// Associations
// db.Registration.hasMany(db.Course);
// db.Registration.hasMany(db.User);

// db.User.belongsTo(db.Registration);
// db.Course.belongsTo(db.Registration);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

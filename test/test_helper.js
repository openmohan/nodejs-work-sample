/* eslint-disable global-require */
// eslint-disable-next-line node/no-unpublished-require
import sinon from 'sinon';
import Util from '../src/server/utils/Utils';

const fixtures = require('sequelize-fixtures');
const rp = require('request-promise');

const testHost = `http://localhost:${process.env.PORT}`;

// beforeEach(async function clearDatabaseBeforeTests() {
//   this.timeout(10000);

//   const db = require('../src/db/models');
//   await db.sequelize.sync({ force: true });
//   await fixtures.loadFile('test/fixtures/*.json', db, { log: () => {} });

//   return require('../src/app');
// }); // END before

/**
 * send request using request-promise
 */
exports.request = async function request(method, url, data) {
  let opts;
  const requestUrl = testHost + url;

  switch (method.toLowerCase()) {
    case 'post':
      opts = exports.getPostRequestOpts(requestUrl, data);
      break;
    case 'patch':
      opts = exports.getPatchRequestOpts(requestUrl, data);
      break;
    case 'delete':
      opts = exports.getDeleteRequestOpts(requestUrl, data);
      break;
    default:
      opts = exports.getRequestOpts(requestUrl, data);
  }

  return rp(opts);
};

exports.getRequestOpts = function getRequestOpts(url, data) {
  const requestOpts = {
    method: 'GET',
    // query string data
    qs: data || {},
    headers: {},
    // milliseconds to wait for a server to send response headers
    timeout: 10000,
    // Automatically stringifies the body to JSON
    json: true,
    // full response instead of just the body
    resolveWithFullResponse: true,
    // rejection only if the request failed for technical reasons
    simple: false,
    // remember cookies for future requests
    jar: true,
  };

  const clonedOpts = JSON.parse(JSON.stringify(requestOpts));

  if (typeof url !== 'undefined' && url.length > 0) {
    clonedOpts.uri = url;
  }

  return clonedOpts;
};

exports.getPostRequestOpts = function getPostRequestOpts(url, data) {
  const opts = exports.getRequestOpts(url);
  opts.method = 'POST';

  if (typeof data !== 'undefined') {
    opts.body = data;
  }

  return opts;
};

exports.getPatchRequestOpts = function getPatchRequestOpts(url, data) {
  const opts = exports.getRequestOpts(url);
  opts.method = 'PATCH';

  if (typeof data !== 'undefined') {
    opts.body = data;
  }

  return opts;
};

exports.getDeleteRequestOpts = function getPostRequestOpts(url) {
  const opts = exports.getRequestOpts(url);
  opts.method = 'DELETE';

  return opts;
};

const setSuccessSpy = sinon.spy();

export class utilStub {
  static send() {
    return sinon.stub(Util.prototype, 'send').returns();
  }

  static setSuccess() {
    sinon.stub(Util.prototype, 'setSuccess').callsFake(setSuccessSpy);
    return setSuccessSpy;
  }
}

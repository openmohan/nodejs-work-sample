const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line security/detect-non-literal-require
let config = require(`./environments/${env}`); // eslint-disable-line import/no-dynamic-require

const defaultConfig = {};

config = { ...defaultConfig, ...config };

module.exports = config;

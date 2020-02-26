const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config').database;

const sequelize = new Sequelize('rostereditor', null, null, config);
const db = {
  User: sequelize.import(path.join(__dirname, 'User.js')),
  sequelize,
};

// associations

module.exports = db;

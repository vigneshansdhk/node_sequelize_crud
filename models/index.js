const sequelize = require('../config/database.js');
const user = require('./User.js');
const db = {
  sequelize,
  user
};


module.exports = db;

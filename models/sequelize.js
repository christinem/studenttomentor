var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://localhost:5432/studenttomentor');

module.exports = sequelize;
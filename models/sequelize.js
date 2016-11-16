var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://localhost:5432/mylivenotes');

module.exports = sequelize;
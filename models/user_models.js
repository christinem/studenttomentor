var connection = require('./sequelize.js');
var Sequelize = require('sequelize');

var User = connection.define('users', {
 	uID: { 
 		type: Sequelize.INTEGER, 
 		primaryKey: true 
 	},
 	first_name: { 
 		type: Sequelize.STRING 
 	},
 	last_name: { 
 		type: Sequelize.STRING 
 	},
 	email: { 
 		type: Sequelize.STRING 
 	},
 	password: { 
 		type: Sequelize.STRING 
 	}, 
 	type_of_mentor: {
 		type: Sequelize.STRING
 	},
 	gender: {
 		type: Sequelize.STRING, 
 		allowNull: true, 
 		defaultValue: null, 
 	},
 	student_number: { 
 		type: Sequelize.INTEGER,
 		allowNull: true, 
 		defaultValue: null,  
 	},
 	birthday: { 
 		type: Sequelize.STRING,
 		allowNull: true, 
 		defaultValue: null,  
 	},
 	about_text: { 
 		type: Sequelize.STRING,
 		allowNull: true, 
 		defaultValue: null, 
 	},
 } );

connection.sync({force: true})
    .then(function(err) {
        User.create({uID: 1, first_name: "Christine", last_name: "Murad", gender: "Female", 
        	student_number: 123456789, birthday: "September 6, 2016", about_text: "Hello",
        	type_of_mentor: "s", email: "hello@hello.com", password: 'hello'});

        User.create({uID: 2, first_name: "Christina", last_name: "Chen", type_of_mentor: "a", 
        	email: "goodbye@goodbye.com", password: 'goodbye'});

        User.create({uID: 3, first_name: "Jasmine", last_name: "Lantos", gender: "Female", 
        	birthday: "September 6, 2016", about_text: "Hello",
        	type_of_mentor: "m", email: "cookies@cookies.com", password: 'cookies'});
    });

module.exports.User = User;

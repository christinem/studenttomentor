var connection = require('./sequelize.js');
var Sequelize = require('sequelize');

var User = connection.define('users', {
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
    type_of_user: {
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
});

var Application = connection.define('applications', {
    expected_grad: { 
        type: Sequelize.STRING 
    },
    past_participation: { 
        type: Sequelize.BOOLEAN
    },
    why_interested: { 
        type: Sequelize.STRING 
    },
    mentor_prefs: { 
        type: Sequelize.STRING 
    },
    year: {
        type: Sequelize.INTEGER
    } ,
    uID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users', 
            key: 'id'
        }
    }
 });

var Interest = connection.define('interests', {
    interest_string: {
        type: Sequelize.STRING 
    },
    uID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users', 
            key: 'id'
        }
    }
});

connection.sync({force: true})
    .then(function(err) {
        User.create({first_name: "Christine", last_name: "Murad", gender: "Female", 
          student_number: 123456789, birthday: "September 6, 2016", about_text: "Hello",
          type_of_user: "s", email: "hello@hello.com", password: 'hello'});

        User.create({first_name: "Christina", last_name: "Chen", type_of_user: "a", 
          email: "goodbye@goodbye.com", password: 'goodbye'});

        User.create({first_name: "Jasmine", last_name: "Lantos", gender: "Female", 
          birthday: "September 6, 2016", about_text: "Hello",
          type_of_user: "m", email: "cookies@cookies.com", password: 'cookies'});

        Application.create({expected_grad: "2016", past_participation: false, 
            why_interested: "It's awesome", mentor_prefs: "None", year: 2015, uID: 1});

        Interest.create({interest_string: "AI", uID: 1});

        Interest.create({interest_string: "HCI", uID: 1});
    });

module.exports.User = User;
module.exports.Application = Application;

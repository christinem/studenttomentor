var connection = require('./sequelize.js');
var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');

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
    interests: {
        type: Sequelize.ARRAY(Sequelize.STRING),
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
    }
});

connection.sync({force: true})
    .then(function(err) {
        var salt = bcrypt.genSaltSync(10);

        User.create({first_name: "Christine", last_name: "Murad", gender: "Female", 
          student_number: 123456789, birthday: "06/09/1994", about_text: "Hello",
          type_of_user: "s", email: "hello@hello.com", password: bcrypt.hashSync("hello", salt), interests: ['AI', 'HCI']});

        User.create({first_name: "Eugene", last_name: "Cheung", gender: "Male", 
          student_number: 123456789, birthday: "06/09/1994", about_text: "Hello",
          type_of_user: "s", email: "eugene@hello.com", password: bcrypt.hashSync("hello", salt), interests: ['AI', 'HCI']});

        User.create({first_name: "Blaze", last_name: "Calaycay", gender: "Male", 
          student_number: 123456789, birthday: "06/09/1994", about_text: "Hello",
          type_of_user: "s", email: "blaze@hello.com", password: bcrypt.hashSync("hello", salt), interests: ['AI', 'HCI']});

        User.create({first_name: "Christina", last_name: "Chen", type_of_user: "a", 
          email: "goodbye@goodbye.com", password: bcrypt.hashSync("goodbye", salt)});

        User.create({first_name: "Karen", last_name: "Reid", gender: "Female", 
          birthday: "06/09/1994", about_text: "Hello",
          type_of_user: "m", email: "karen@cookies.com", password: bcrypt.hashSync("cookies", salt)});

        User.create({first_name: "Shen", last_name: "Ta", gender: "Male", 
          birthday: "06/09/1994", about_text: "Hello",
          type_of_user: "m", email: "shen@cookies.com", password: bcrypt.hashSync("cookies", salt)});

        User.create({first_name: "Jasmin", last_name: "Lantos", gender: "Female", 
          birthday: "06/09/1994", about_text: "Hello",
          type_of_user: "m", email: "cookies@cookies.com", password: bcrypt.hashSync("cookies", salt)});

        Application.create({expected_grad: "2016", past_participation: false, 
            why_interested: "It's awesome", mentor_prefs: "None", year: 2015, uID: 1});

        Application.create({expected_grad: "2017", past_participation: true, 
            why_interested: "It's awesome", mentor_prefs: "None", year: 2016, uID: 1});

        Interest.create({interest_string: "AI"});

        Interest.create({interest_string: "HCI"});
    });

module.exports.User = User;
module.exports.Application = Application;
module.exports.Interest = Interest;

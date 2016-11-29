var Models = require('../models/models.js');
require('sequelize');

exports.loginPage = function(req, res) {
    res.render('login');
};

exports.homePage = function(req, res) {
	Models.User.findById(req.params.user_id).then(function(user) {
        res.render('homepage', { title: 'Dashboard', user: JSON.stringify(user) });
    }); 
};

exports.profilePage = function(req, res) {
	Models.User.findById(req.params.user_id).then(function(user) {
        res.render('profile_page', { title: 'Profile Page', user: JSON.stringify(user) });
    }); 
};

exports.editProfilePage = function(req, res) {
	Models.User.findById(req.params.user_id).then(function(user) {
        res.render('edit_profile_page', { title: 'Profile Page', user: JSON.stringify(user) });
    }); 
};

exports.applicationPage = function(req, res) {
    res.render('application_page', { title: 'Dashboard', user: req.user });
};

// app.get('/', function(req, res) {
//     res.render('login', {user: req.user});
// })

// app.post('/login',
//     passport.authenticate('local', { successRedirect: '/homepage',
//                                      failureRedirect: '/login'}));

// app.get('/admin_dashboard', )

// app.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/login');
// });

// app.get('/register', function(req, res) {
//     res.render('register', { });
// });

// app.get('/user_info', function(req, res) {
//     res.json(req.user);
// });
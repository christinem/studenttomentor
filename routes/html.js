var Models = require('../models/models.js');
require('sequelize');

exports.loginPage = function(req, res) {
  res.render('login');
};

exports.registerPage = function(req, res) {
  res.render('register', {title: 'Register'});
};

exports.homePage = function(req, res) {
  Models.User.findById(req.params.current_user_id).then(function(user) {
    res.render('homepage', { title: 'Dashboard', current_user: JSON.stringify(user) });
  }); 
};

exports.profilePage = function(req, res) {
  Models.User.findById(req.params.current_user_id).then(function(current_user) {
    Models.User.findById(req.params.user_id).then(function(user) {
        res.render('profile_page', { title: 'Profile Page', user: JSON.stringify(user), 
            current_user: JSON.stringify(current_user)});
    });
  }); 
};

exports.editProfilePage = function(req, res) {
  Models.User.findById(req.params.current_user_id).then(function(current_user) {
     Models.User.findById(req.params.user_id).then(function(user) {
      res.render('edit_profile_page', { title: 'Edit Profile Page', user: JSON.stringify(user), 
        current_user: JSON.stringify(current_user)});
    });
  }); 
};

exports.applicationPage = function(req, res) {
  Models.User.findById(req.params.current_user_id).then(function(user) {
    res.render('application_page', { title: 'New Application', current_user: JSON.stringify(user) });
  }); 
};

exports.viewApplicationPage = function(req, res) {
  Models.User.findById(req.params.user_id).then(function(user) {
    Models.Application.findById(req.params.application_id).then(function(application) {
      res.render('view_application_page', { title: 'New Application', 
                                            user: JSON.stringify(user),
                                            application: JSON.stringify(application) });
    })        
  }); 
};

exports.searchPage = function(req, res) {
  Models.User.findById(req.params.user_id).then(function(user) {
    res.render('search_page', { title: 'Search', current_user: JSON.stringify(user) });
  }); 
};

exports.viewAllPage = function(req, res) {
  Models.User.findById(req.params.current_user_id).then(function(current_user) {
    if (req.params.type == "users") {
      Models.User.findAll().then(function(users) {
         res.render('view_all', { title: 'View All', 
                                  current_user: JSON.stringify(current_user), 
                                  data: JSON.stringify(users)});
      })
    } else if (req.params.type == "applications") {
      Models.Application.findAll().then(function(applications) {
         res.render('view_all', { title: 'View All', 
                                  current_user: JSON.stringify(current_user), 
                                  data: JSON.stringify(applications)});
      })
    }
  }); 
}
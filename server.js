var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var connection = require('./models/sequelize.js');

var user_routes = require('./routes/users');
var interest_routes = require('./routes/interests');
var application_routes = require('./routes/applications');
var html_routes = require('./routes/html');

require('./models/userlogin.js')();

var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(session({secret: 'anything', resave: false, saveUninitialized: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Routes for Users ---------- //
app.get('/users', user_routes.findUsers);

app.get('/users/admins', user_routes.findAdmins);
app.post('/users/admins', user_routes.addAdmin);
app.put('/users/admins', user_routes.updateAdmin);
app.delete('/users/admins', user_routes.deleteAdmin);

app.get('/users/mentors', user_routes.findMentors);
app.post('/users/mentors', user_routes.addMentor);
app.put('/users/mentors', user_routes.updateMentor);
app.delete('users/mentors', user_routes.deleteMentor);

app.get('/users/students', user_routes.findStudents);
app.post('/users/students', user_routes.addStudent);
app.put('/users/students', user_routes.updateStudent);
app.delete('/users/students', user_routes.deleteStudent);

// ---------- Routes for Interests ---------- //
app.get('/interests', interest_routes.findInterests);
app.post('/interests', interest_routes.addInterest);
app.delete('/interests', interest_routes.deleteInterest);

// ---------- Routes for Applications ---------- //
app.get('/applications', application_routes.findApplications);
app.post('/applications', application_routes.addApplication);
app.put('/applications', application_routes.updateApplication);
app.delete('/applications', application_routes.deleteApplication);

// --------- HTML Routes ------------ //
var auth = function(req, res, next) { 
  if (!req.isAuthenticated()) 
    res.redirect('/login'); 
  else next(); 
}; 

app.get('/', html_routes.loginPage);
app.get('/login', html_routes.loginPage);

app.get('/user/:current_user_id/homepage/', auth, html_routes.homePage);
app.get('/user/:current_user_id/edit_profile_page/:user_id', auth, html_routes.editProfilePage);
app.get('/user/:current_user_id/profile_page/:user_id', auth, html_routes.profilePage);
app.get('/user/:current_user_id/application_page/', auth, html_routes.applicationPage);
app.get('/user/:user_id/view_application_page/:application_id', auth, html_routes.viewApplicationPage);
app.get('/user/:user_id/search/', auth, html_routes.searchPage); 
app.get('/register', html_routes.registerPage);

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/homepage',
//                                    failureRedirect: '/login'}));

app.post('/login',
  passport.authenticate('local'), function(req, res) {
      res.redirect('/user/' + req.user.id + '/homepage/');
  });

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

app.listen(3000);
console.log('Listening on port 3000');
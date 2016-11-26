var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var connection = require('./models/sequelize.js');

var user_routes = require('./routes/users');
var html_routes = require('./routes/html');

require('./models/userlogin.js')();

var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cookieParser());
app.use(session({secret: 'anything', resave: false, saveUninitialized: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/current_user', function(req, res) {
  if (req.user === undefined) {
    // The user is not logged in
    res.json({});
  } else {
    res.json(req.user);
  }
});

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

// --------- HTML Routes ------------ //
var auth = function(req, res, next) { 
  if (!req.isAuthenticated()) 
    res.redirect('/login'); 
  else next(); 
}; 

app.get('/', html_routes.loginPage);
app.get('/login', html_routes.loginPage);
app.get('/homepage', auth, html_routes.homePage);
// app.get('/student_dashboard', auth, html_routes.studentDashboard);
// app.get('/mentor_dashboard', auth, html_routes.adminDashboard);
// app.get('/profile_page', auth, html_routes.profilePage);
// app.get('/register', html_routes.registerPage);

app.post('/login',
  passport.authenticate('local', { successRedirect: '/homepage',
                                   failureRedirect: '/login'}));

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

app.listen(3000);
console.log('Listening on port 3000');

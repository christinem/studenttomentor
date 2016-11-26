var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var connection = require('./models/sequelize.js');

var user_routes = require('./routes/users');
var html_routes = require('./routes/html');

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

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

app.get('/', function(req, res) {
    res.render('login', {user: req.user});
})

// ---------- Routes for Users ---------- //
app.get('/users', user_routes.findUsers);
app.get('/users/admins', user_routes.findAdmins);
app.get('/users/mentors', user_routes.findMentors);
app.get('/users/students', user_routes.findStudents);

// --------- Routes for Applications ------- //

// --------- HTML Routes ------------ //
app.get('/', function(req, res) {
    res.render('login', {user: req.user});
})

var auth = function(req, res, next) { 
    if (!req.isAuthenticated()) 
        res.redirect('/login'); 
    else next(); 
}; 

app.get('/', html_routes.loginPage);
app.get('/login', html_routes.loginPage);
// app.get('/admin_dashboard', auth, html_routes.adminDashboard);
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

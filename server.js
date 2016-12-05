var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var html_routes = require('./routes/html');
var app = express();

require('./models/userlogin.js')();

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

require('./routes/routes.js')(app);

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
  app.get('/user/:current_user_id/view_all/:type', auth, html_routes.viewAllPage);
  app.get('/register', html_routes.registerPage);

  app.post('/login',
    passport.authenticate('local'), function(req, res) {
        res.redirect('/user/' + req.user.id + '/homepage/');
    });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000 if local or ' + toString(process.env.PORT)) + ' on heroku';
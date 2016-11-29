var auth = function(req, res, next) { 
    if (!req.isAuthenticated()) 
        res.redirect('/login'); 
    else next(); 
}; 


exports.loginPage = function(req, res) {
    res.render('login', {user: req.user});
};

exports.homePage = function(req, res) {
    res.render('homepage', { title: 'Dashboard', user: req.user });
};

exports.profilePage = function(req, res) {
    res.render('profile_page', { title: 'Dashboard', user: req.user });
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
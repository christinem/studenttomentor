var auth = function(req, res, next) { 
    if (!req.isAuthenticated()) 
        res.redirect('/login'); 
    else next(); 
}; 


exports.loginPage = function(req, res) {
    res.render('login', {user: req.user});
};

// app.get('/', function(req, res) {
//     res.render('login', {user: req.user});
// })

// app.post('/login',
//     passport.authenticate('local', { successRedirect: '/homepage',
//                                      failureRedirect: '/login'}));

// app.get('/admin_dashboard', )

// app.get('/homepage', auth, function(req, res) {
//     res.render('homepage', { title: 'Homepage!', user: req.user });
// });

// app.get('/documentview', auth, function(req, res) {
//     res.render('document_view', { title: 'Document View', user: req.user });
// });

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
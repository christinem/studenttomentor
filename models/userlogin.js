var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Models = require('./models.js');

module.exports = function () { 

    passport.use('local', new LocalStrategy(
        function(username, password, done) {
            Models.User.findOne( { where: { email: username}} )
                .then(function(user){
                
                    if(!user)
                      // if the user does not exist
                      return done(null, false, {message: "The user does not exist"});
                    else if(password != user.password)
                      // if password does not match
                      return done(null, false, {message: "Wrong password"});
                    else
                      // if everything is OK, return null as the error
                      // and the authenticated user
                      return done(null, user);
                })
                .error(function(err){
                  // if command executed with error
                  return done(err);
                });
        }
    ));

    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });


    passport.deserializeUser(function(uid, done) {
        Models.User.findOne({
            where: {
                'id': uid
            }
        }).then(function (user) {
            if (user == null) {
              done(new Error('Wrong user id.'))
            }
            done(null, user)
        })
    });
}



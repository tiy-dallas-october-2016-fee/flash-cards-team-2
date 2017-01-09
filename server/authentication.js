var PassportLocalStrategy = require('passport-local').Strategy;
var datasource = require('./datasource.js');
var User = require('./models/user');
var mongoose = require('mongoose');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {

    var objectId = mongoose.Types.ObjectId(id);

    User.findById(objectId, function(err, user) {
      done(null, user);
    });
  });




  passport.use('local-login', new PassportLocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, email, password, done) {

      var success = function(user) {
        done(null, user);
      }

      var failure = function() {
        done(null, false, { message: 'Invalid login' });
      }

      User.findOne({email: email}, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, null);
        }

        user.checkPassword(password, user.password, function(err, isMatch) {
          if (err) { return done(err); }
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, null);
          }
        });
      });

      // datasource.validateLogin(username, password, success, failure);
    }
  ));

  passport.use('local-create-account',
    new PassportLocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, email, password, done) {

      var newUser = new User({
        email: email,
        password: password
      });
      newUser.save(function(err, user) {
        done(null, user);
      });
    }));

}

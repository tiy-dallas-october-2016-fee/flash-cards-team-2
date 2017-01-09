/*
This is a sub-router, a route file dedicated to a subsection of the total routes.
*/

var express = require('express');
var datasource = require('./datasource.js');

// Middleware to send all previously-authed users to /app
var alreadyAuthed = (req, res, next) => {
  var isAuthed = req.isAuthenticated();
  if (isAuthed) {
    res.redirect('/app');
    return;
  }
  next();
}

module.exports = function(passport) {

  // The express router for configuring the routes
  var router = express.Router();



  // Login
  router.get('/login', alreadyAuthed, function(req, res) {
    res.render('login.ejs');
  });

  router.post('/login',
    passport.authenticate('local-login',
                          { successRedirect: '/app',
                            failureRedirect: '/login' }),
    function(req, res) {}
  );


  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });



  // Create account
  router.get('/create-account', alreadyAuthed, function(req, res) {
    res.render('create_account.ejs');
  });

  router.post('/create-account',
    passport.authenticate('local-create-account',
                          { successRedirect: '/app',
                            failureRedirect: '/create-account' }),
    function(req, res) {
  });

  return router;
}

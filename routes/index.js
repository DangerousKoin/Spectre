const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/users');
});

// Google OAuth login route
// User wants to log in
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users/:id',
    failureRedirect: '/users',
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});

router.get('/all', allUsers);

router.get('/new', newUser);

router.post('/', addUser);

router.delete('/:id', isLoggedIn, delUser);


// Index doesn't have a controller, so run the functions below
function allUsers(req, res, next) {
  User.find(function(err, users) {
    if (err) return next(err);
    res.render('users/all', {users});
  });
}

function newUser(req, res) {
  res.render('users/new');
}

function addUser(req, res) {
  const newUser = new User(req.body);
  newUser.save(function(err) {
    if (err) return next(err);
    res.redirect(`/users/${user._id}`);
  });
}

function delUser(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById(req.params.id).exec(function(err, user) {
    if (err) return next(err);
    const userSubdoc = user.id(req.params.id);
    // Remove the comment using the remove method of the subdoc
    userSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/${user._id}`);
    });
    res.redirect(`/users/${user._id}`);
}

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
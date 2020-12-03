const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const Item = require('../models/item');

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
))

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate('google', {
successRedirect : '/', 
failureRedirect : '/error'
}))

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.render('logout');
})

// Begin Normal Index Control
router.get('/', 
  function index(req, res) {
    User.find({}, function(err, users, next) {
      Item.find({}, function(err, items, next) {
        if (err) return next(err);
        res.render('index', {users, items});
      });
      if (err) return next(err);
    });
})

router.get('/register', 
  function register(req, res) {
    User.find({}, function(err, users, next) {
      Item.find({}, function(err, items, next) {
        if (err) return next(err);
        res.render('register', {users, items});
      });
      if (err) return next(err);
    });
})

router.get('/peace', 
  function index(req, res) {
    User.find({}, function(err, users, next) {
      Item.find({}, function(err, items, next) {
        if (err) return next(err);
        res.render('peace', {users, items});
      });
      if (err) return next(err);
    });
})

router.post('/register', 
  function addUser(err, req, res, next) {
    const user = new User(req.body);
    user.save(function(err) {
      if (err) return next(err);
      res.redirect('/users');
    });
  if (err) return next(err);
})

module.exports = router;
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
failureRedirect : '/redirects/error'
}))

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.render('redirects/logout');
})
router.get('/login', function(req, res){
  res.render('redirects/login');
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
        res.render('redirects/register', {users, items});
      });
      if (err) return next(err);
    });
})

router.get('/peace', 
  function index(req, res) {
    User.find({}, function(err, users, next) {
      Item.find({}, function(err, items, next) {
        if (err) return next(err);
        res.render('redirects/peace', {users, items});
      });
      if (err) return next(err);
    });
})

router.post('/register', 
  function addUser(req, res) {
    const user = new User(req.body);
    user.save(function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  })

module.exports = router;
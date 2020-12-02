const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
  index,
  show,
  newUser,
  addUser,
  delUser
};

function index(req, res, next) {
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.render('users/index', {users});
  });
}

function show(req, res, next) {
  User.findById(req.params.id)
  .populate('cart').exec(function(err, user) {
    if (err) return next(err);
    Item.find({_id: {$nin: user.cart}})
    .exec(function(err, items) {
      if (err) return next(err);
      res.render('users/show', {user, items});
    });
  });
}

function newUser(req, res) {
  res.render('users/new');
}

function addUser(req, res) {
  const user = new User(req.body);
  user.save(function(err) {
    if (err) return next(err);
    res.redirect(`/users/${user._id}`);
  });
}

function delUser(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById(req.params.id).exec(function(err, user) {
    if (err) return next(err);
    user.remove();
    
    });
    
    res.redirect('/');
    
}

const User = require('../models/user');
const Item = require('../models/item');
const { urlencoded } = require('express');

module.exports = {
  index,
  cart,
  addToCart,
  delUser,
  delFromCart
};

function index(req, res) {
  User.find({}, function(err, users, next) {
    Item.find({}, function(err, items, next) {
      if (err) return next(err);
      res.render('user/', {users, items});
    });
    if (err) return next(err);
  });
}

function cart(req, res) {
  User.find({}, function(users) {
    Item.find({}, function(err, items) {
      if (err) return next(err);
      res.render('user/cart', {users, items});
    });
  });
}

function addToCart(req, res) {
  let user = req.user;
  console.log(req.body);
  user.cart.push(req.body);
  user.save();
  res.redirect('/cart');
}


function delUser(req, res) {
  if (req.user.id === req.body.userId) {
    User.findById(req.body.userId).exec(function(err, user) {
      if (err) return next(err);
      user.remove(function(err) {
        if (err) return next(err);
      });
    });
    res.redirect('/peace');
  } else {
    res.redirect('/');
  };
}

function delFromCart(req, res) {
  if (req.user.id === req.body.userId) {
    let user = req.user
    user.cart.remove(req.body.cartItem);
    user.save(function(err) {
      if (err) return next(err);
    }); 
    res.redirect('/cart');
  } else {
  res.redirect('/');
  };
}
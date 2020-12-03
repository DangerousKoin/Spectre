const User = require('../models/user');
const Item = require('../models/item');

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
  User.find({}, function(err, users, next) {
    Item.find({}, function(err, items, next) {
      if (err) return next(err);
      res.render('user/cart', {users, items});
    });
    if (err) return next(err);
  });
}

function addToCart(req, res) {
  User.findById(req.body.userId, function (err, user, next) {
    if (err) return next(err);
    user.cart.push(req.body.itemId);
    user.save();
    res.redirect('/cart');
  });
}

function delUser(req, res) {
  User.findById(req.body.userId).exec(function(err, user, next) {
    if (err) return next(err);
    user.remove();
    res.redirect('/peace');
    });
}

function delFromCart(req, res) {
  User.findById(req.body.userId, function (err, user, next) {
    if (err) return next(err);
    user.cart.remove(req.body.itemId);
    res.redirect('/cart');
  });
}

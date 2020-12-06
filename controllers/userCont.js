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
  User.find({}, function(users) {
    Item.find({}, function(err, items) {
      if (err) return next(err, res);
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
  User.findById(req.body.userId).exec(function(err, user) {
    if (err) return next(err);
    user.remove();
    res.redirect('/redirects/peace');
    });
}

function delFromCart(req, res) {
  let user = req.user;
  user.cart.findById(req.body._id).exec(function (err, item) {
    if (err) return next(err);
    item.remove();
      res.redirect('/cart');
  });
}

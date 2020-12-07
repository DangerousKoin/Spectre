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
    console.log("userId ", req.body.userId);
    if (user === req.user) {
      console.log("deleting user");
      user.remove();
      
    };
    if (err) return next(err, res);
    res.redirect('/peace');
    
    });
}

function delFromCart(req, res) {
  let user = req.user;
  
}
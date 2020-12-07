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
  user.cart.push(req.body.prodItem);
  user.save();
  res.redirect('/');
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
    let user = req.user;
      let userCart = req.user.cart;
      userCart.forEach(function(cartItem) {
        let delItem = req.body.itemId;
        let cartItemId = cartItem._id;
        let ciString = cartItemId.toString();
        if (ciString === delItem) {
          cartItem.remove();
          user.save();
        };
      });     
    res.redirect('/cart');
  } else {
    res.redirect('/');
  };
}
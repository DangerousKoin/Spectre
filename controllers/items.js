const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  newItem,
  addItem,
  addToCart,
  delItem,
  delFromCart
};

function newItem(req, res) {
  Item.find({}, function (err, items) {
    if (err) return next(err);
    res.render('items/new', {items});
  })
}

function addItem(req, res) {
  Item.create(req.body, function (err, item) {
    if (err) return next(err);
    res.redirect('/items/new');
  });
}

function addToCart(req, res) {
  User.findById(req.params.id, function (err, user) {
    user.cart.push(req.body.itemId);
    user.save(function (err) {
      if (err) return next(err);
      res.redirect(`/users/${user._id}`);
    });
  });
}

function delItem(req, res) {
  Item.findById(req.params.id).exec(function (err, item) {
  item.remove();
  res.redirect('/items/new');
  });
}

function delFromCart(req, res) {
  req.user.cart.findById(req.params.id, function (err, item) {
    item.remove();
    if (err) return next(err);
    res.redirect('/users/');
  });
  
}

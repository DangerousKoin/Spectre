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
  // Note the cool "dot" syntax to query on the property of a subdoc
  Item.findOne({'items._id': req.params.id}, function(err, item) {
    if (err) return next(err);
    item.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/show`);
    });
    res.redirect(`/users/${user._id}`);
}

function delFromCart(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById({'user._id': req.params.id}, function (err, user) {
    user.cart.remove({'i.id': req.params.id});
    user.save(function (err) {
      if (err) return next(err);
      res.redirect(`/users/${user._id}`);
    });
  });
}
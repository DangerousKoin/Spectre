const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  new: newItem,
  addItem,
  addToCart,
  delItem,
  delFromCart
};

function newItem(req, res) {
  Item.find({}, function (err, items) {
    res.render('items/new', {items});
  })
}

function addItem(req, res) {
  Item.create(req.body, function (err, item) {
    res.redirect('/items/new');
  });
}

function addToCart(req, res) {
  User.findById(req.params.id, function (err, user) {
    user.cart.push(req.body.itemId);
    user.save(function (err) {
      res.redirect(`/users/${user._id}`);
    });
  });
}

function delItem(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Item.findOne({'items._id': req.params.id}, function(err, items) {
    const itemsSubdoc = items.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!itemsSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${user._id}`);
    // Remove the comment using the remove method of the subdoc
    itemsSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/show`);
    });
    res.redirect(`/users/${users._id}`);
}

function delFromCart(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findOne({'users._id': req.params.id}, function(err, users) {
    const cartSubdoc = users.cart.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!cartSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${user._id}`);
    // Remove the comment using the remove method of the subdoc
    cartSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/show`);
    });
    res.redirect(`/users/${users._id}`);
}
const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  new: newItem,
  addItem,
<<<<<<< HEAD
  addToCart,
  delItem,
  delFromCart
=======
<<<<<<< HEAD
  addToCart,
  delItem,
  delFromCart
=======
  delete: delItem
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
function addToCart(req, res) {
  User.findById(req.params.id, function (err, user) {
    user.cart.push(req.body.itemId);
    user.save(function (err) {
      if (err) return next(err);
      res.redirect(`/users/${user._id}`);
    });
  });
}

<<<<<<< HEAD
=======
=======
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
function delItem(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Item.findOne({'items._id': req.params.id}, function(err, item) {
    if (err) return next(err);
<<<<<<< HEAD
    const itemSubdoc = item.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!itemSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${user._id}`);
=======
<<<<<<< HEAD
    const itemSubdoc = item.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!itemSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${user._id}`);
    // Remove the comment using the remove method of the subdoc
    itemSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/show`);
    });
    res.redirect(`/users/${user._id}`);
}

function delFromCart(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById(req.params.id, function (err, user) {
    user.cart.delete(req.body.itemId);
    user.save(function (err) {
      if (err) return next(err);
      res.redirect(`/users/${user._id}`);
    });
  });
=======
    const itemSubdoc = item.id(req.params.id);    
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
    // Remove the comment using the remove method of the subdoc
    itemSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/show`);
    });
    res.redirect(`/users/${user._id}`);
<<<<<<< HEAD
}

function delFromCart(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById(req.params.id, function (err, user) {
    user.cart.delete(req.body.itemId);
    user.save(function (err) {
      if (err) return next(err);
      res.redirect(`/users/${user._id}`);
    });
  });
=======
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
}
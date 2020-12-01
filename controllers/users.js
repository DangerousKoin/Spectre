const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
  index,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
  show,
  new: newUser,
  addUser,
  delUser
<<<<<<< HEAD
=======
};

function index(req, res, next) {
  User.find({}, function(err, user) {
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
=======
  cart,
  addToCart,
  delFromCart
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
};

function index(req, res, next) {
  User.find({}, function(err, user) {
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
<<<<<<< HEAD
      res.render('users/show', {user, items});
=======
      res.render('users/cart', {user, items});
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
    });
  });
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
function newUser(req, res) {
  res.render('users/new');
}

function addUser(req, res) {
  const user = new User(req.body);
  user.save(function(err) {
    if (err) return next(err);
    res.redirect(`/users/${user._id}`);
<<<<<<< HEAD
=======
  });
}

function delUser(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById(req.params.id).exec(function(err, users) {
    if (err) return next(err);
    const usersSubdoc = users.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!usersSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${user._id}`);
    // Remove the comment using the remove method of the subdoc
    usersSubdoc.remove();
=======
function addToCart(req, res) {
  User.findById(req.params.id, function (err, user) {
    user.cart.push(req.body.itemId);
    user.save(function (err) {
      if (err) return next(err);
      res.redirect(`/users/${user._id}`);
    });
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
  });
}

function delUser(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById(req.params.id).exec(function(err, users) {
    if (err) return next(err);
    const usersSubdoc = users.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!usersSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${user._id}`);
    // Remove the comment using the remove method of the subdoc
<<<<<<< HEAD
    usersSubdoc.remove();
=======
    itemSubdoc.remove();
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
      // Redirect back to the book's show view
    res.redirect(`/users/${user._id}`);
    });
    res.redirect(`/users/${user._id}`);
}

const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
  index,
  show,
  new: newUser,
  addUser,
  delUser
};

function index(req, res, next) {
  User.find({}, function(err, users) {
    res.render('users/index', {users});
  });
}

function show(req, res, next) {
  User.findById(req.params.id)
  .populate('cart').exec(function(err, user) {
    Item.find({_id: {$nin: user.cart}})
    .exec(function(err, items) {
      console.log(items);
      // if (err) return next(err);
      res.render('users/show', {user, items});
    });
  });
}

function newUser(req, res) {
  res.render('users/new');
}

function addUser(req, res) {
  const user = new User(req.body);
  user.save(function(err) {
    if (err) return res.redirect('/users/new');
    res.redirect(`/users/${user._id}`);
  });
}

function delUser(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findOne({'users._id': req.params.id}, function(err, users) {
    const usersSubdoc = users.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!usersSubdoc.userId.equals(req.user._id)) return res.redirect(`/users/${user._id}`);
    // Remove the comment using the remove method of the subdoc
    usersSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/show`);
    });
    res.redirect(`/users/${users._id}`);
}

const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  index,
  newItem,
  addItem,
  delUser,
  delItem
};

function index(req, res) {
  if (req.user.admin === true) {
    User.find({}, function(err, users) {
      Item.find({}, function(err, items) {
        if (err) return next(err);
        res.render('admin/', {users, items});
      });
      if (err) return next(err);
    });
  } else {
    res.redirect('/');
  };
}

function newItem(req, res) {
  if (req.user.admin === true) {
  User.find({}, function(err, users) {
    Item.find({}, function(err, items) {
      if (err) return next(err, res);
      res.render('admin/items', {users, items});
    });
    if (err) return next(err, res);
  });
  } else {
    res.redirect('/');
  };
}

function addItem(req, res) {
  if (req.user.admin === true) {
    const item = new Item(req.body);
    item.save(function(err) {
      if (err) return next(err);
    });
    res.redirect('/items');
  } else {
    res.redirect('/');
  };
}

function delUser(req, res) {
  if (req.user.admin === true) {
    User.findById(req.body.userId).exec(function(err, user) {
      if (err) return next(err);
      user.remove(function(err) {
        if (err) return next(err);
      });
    });
    res.redirect('/admin');
  } else {
    res.redirect('/');
  };
}

function delItem(req, res) {
  if (req.user.admin === true) {
    Item.findById(req.body.itemId).exec(function (err, item) {
      if (err) return next(err);
      item.remove(function(err) {
        if (err) return next(err);
      });
    });
    res.redirect('/items');
  } else {
    res.redirect('/');
  };
}
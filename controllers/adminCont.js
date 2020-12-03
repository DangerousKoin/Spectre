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
  User.find({}, function(err, users) {
    Item.find({}, function(err, items) {
      if (err) return next(err);
      res.render('admin/', {users, items});
    });
    if (err) return next(err);
  });
}

function newItem(req, res) {
  User.find({}, function(err, users) {
    Item.find({}, function(err, items) {
      if (err) return next(err);
      res.render('admin/items', {users, items});
    });
    if (err) return next(err);
  });
}

function addItem(req, res) {
  const item = new Item(req.body);
  item.save(function(err) {
    if (err) return next(err);
    res.redirect('/items');
  });
}

function delUser(req, res) {
  User.findById(req.body.userId).exec(function(err, user, next) {
    if (err) return next(err);
    user.remove();
    res.redirect('/admin');
    });
}


function delItem(req, res) {
  Item.findById(req.body.itemId).exec(function (err, item, next) {
    if (err) return next(err);
    item.remove();
    res.redirect('/items');
    });
}


    


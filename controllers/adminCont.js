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
  console.log(req.body);
  const item = new Item(req.body);
  item.save(function(err) {
    if (err) return next(err);
    res.redirect('/items');
  });
  
}

function delUser(err, req, res, next) {
  User.findById(req.params.id).exec(function(err, user, next) {
    if (err) return next(err);
    user.remove();
    res.redirect('/admin');
    });
  if (err) return next(err);
}


function delItem(err, req, res, next) {
  Item.findById(req.params.id).exec(function (err, item, next) {
    if (err) return next(err);
    item.remove();
    res.redirect('/items');
    });
  if (err) return next(err);
}


    


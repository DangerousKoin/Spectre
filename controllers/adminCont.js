const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  index,
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

function addItem(err, req, res, next) {
  const item = new Item(req.body);
  item.save(function(err) {
    if (err) return next(err);
    res.redirect('/admin/items');
  });
  if (err) return next(err);
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
    res.redirect('/admin/items');
    });
  if (err) return next(err);
}


    


const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  new: newItem,
  addItem,
  delete: delItem
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

function delItem(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Item.findOne({'items._id': req.params.id}, function(err, item) {
    if (err) return next(err);
    const itemSubdoc = item.id(req.params.id);    
    // Remove the comment using the remove method of the subdoc
    itemSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/cart`);
    });
    res.redirect(`/users/${user._id}`);
}
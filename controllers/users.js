const User = require('../models/user');

module.exports = {
  index
};

function index(req, res) {
  User.find({}, function(err) {
    res.render('users');
  });
}
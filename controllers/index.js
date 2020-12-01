const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
  index
};

// The root route renders our only view
function index(req, res, next) {
    User.find({}, function(err, users) {
        console.log(users);
      res.render('index', {users});
    });
}
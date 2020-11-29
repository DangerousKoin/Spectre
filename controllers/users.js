const User = require('../models/user');

module.exports = {
  index,
  users,
  id,
  addFact,
  delFact
};

function index(req, res, next) {
    res.render('management/index');
}
function id(req, res, next) {
  console.log(res);
}


function users(req, res, next) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('management/users', { users, name: req.query.name, sortKey });
  });
}

function addFact(req, res, next) {
  // This is very important to remember
  // req.user IS the Mongoose doc for the logged in user/student
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('management/');
  });
}

function delFact(req, res, next) {

}
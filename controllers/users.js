const User = require('../models/user');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
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
    res.redirect('/management/users');
  });
}

function delFact(req, res, next) {

}
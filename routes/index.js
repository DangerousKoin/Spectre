const express = require('express');
const router = express.Router();
const passport = require('passport');
<<<<<<< HEAD
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const User = require('../models/user');
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/users');
});
=======
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
>>>>>>> parent of 97d68ce... New Routing In Progress
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
))

// Google OAuth callback route
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users/:id',
    failureRedirect: '/users',
  }
));
=======
=======
>>>>>>> parent of 97d68ce... New Routing In Progress
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6
router.get('/oauth2callback', passport.authenticate('google', {
successRedirect : '/', 
failureRedirect : '/'
}))
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
>>>>>>> parent of 97d68ce... New Routing In Progress
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
<<<<<<< HEAD
  res.redirect('/');
})
=======
<<<<<<< HEAD
  res.redirect('/');
<<<<<<< HEAD
<<<<<<< HEAD
=======
  res.redirect('/users');
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
});
=======
})
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
})
>>>>>>> parent of 97d68ce... New Routing In Progress

router.get('/all', allUsers);

router.get('/new', newUser);

router.post('/', addUser);

router.delete('/:id', isLoggedIn, delUser);


// Index doesn't have a controller, so run the functions below
function allUsers(req, res, next) {
  User.find(function(err, users) {
    if (err) return next(err);
    res.render('users/all', {users});
  });
}

function newUser(req, res) {
  res.render('users/new');
}

function addUser(req, res) {
  const newUser = new User(req.body);
  newUser.save(function(err) {
    if (err) return next(err);
    res.redirect(`/users/${user._id}`);
  });
}

function delUser(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  User.findById(req.params.id).exec(function(err, user) {
    if (err) return next(err);
    const userSubdoc = user.id(req.params.id);
    // Remove the comment using the remove method of the subdoc
    userSubdoc.remove();
      // Redirect back to the book's show view
    res.redirect(`/users/${user._id}`);
    });
    res.redirect(`/users/${user._id}`);
}

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6

module.exports = router;
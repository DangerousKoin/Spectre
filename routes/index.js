var router = require('express').Router();
const passport = require('passport');
<<<<<<< HEAD
<<<<<<< HEAD

// The root route renders our only view
router.get('/', function(req, res) {
  // Where do you want to go for the root route
});
=======
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
>>>>>>> parent of 97d68ce... New Routing In Progress

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
))

// Google OAuth callback route
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/', // where do you want the client to go after you login 
    failureRedirect : '/' // where do you want the client to go if login fails
  }
));
=======
=======
>>>>>>> parent of 97d68ce... New Routing In Progress
router.get('/oauth2callback', passport.authenticate('google', {
successRedirect : '/', 
failureRedirect : '/'
}))
<<<<<<< HEAD
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
>>>>>>> parent of 97d68ce... New Routing In Progress

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
})
>>>>>>> parent of 97d68ce... New Routing In Progress
=======
})
>>>>>>> parent of 97d68ce... New Routing In Progress

module.exports = router;
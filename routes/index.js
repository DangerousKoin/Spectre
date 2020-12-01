var router = require('express').Router();
const passport = require('passport');
<<<<<<< HEAD

// The root route renders our only view
router.get('/', function(req, res) {
  // Where do you want to go for the root route
});
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
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/', // where do you want the client to go after you login 
    failureRedirect : '/' // where do you want the client to go if login fails
  }
));
=======
router.get('/oauth2callback', passport.authenticate('google', {
successRedirect : '/', 
failureRedirect : '/'
}))
>>>>>>> parent of 97d68ce... New Routing In Progress

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
<<<<<<< HEAD
});
=======
})
>>>>>>> parent of 97d68ce... New Routing In Progress

module.exports = router;
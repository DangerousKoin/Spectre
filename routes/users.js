const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);
router.get('/:id', usersCtrl.cart);

// POST /cart
// We will already have access to the logged in user on
// the server, therefore do not use: /users/:id/facts
router.post('/cart', isLoggedIn, usersCtrl.addToCart);

// DELETE
router.delete('/cart/:id', isLoggedIn, usersCtrl.delFromCart);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
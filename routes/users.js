const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

<<<<<<< HEAD
router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.get('/:id', usersCtrl.show);
router.post('/', usersCtrl.addUser);
router.delete('/:id', usersCtrl.delUser);
=======
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
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a

module.exports = router;
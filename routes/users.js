const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/management/index', usersCtrl.index);
router.get('/management/users', usersCtrl.users);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/facts', isLoggedIn, usersCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', isLoggedIn, usersCtrl.delFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
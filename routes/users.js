const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);
router.get('/users/new', usersCtrl.newUser);
router.get('/users/:id', usersCtrl.show);
router.post('/users', usersCtrl.addUser);
router.delete('/users/:id', usersCtrl.delUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.get('/:id', usersCtrl.show);
router.post('/', usersCtrl.addUser);
router.delete('/:id', usersCtrl.delUser);

module.exports = router;
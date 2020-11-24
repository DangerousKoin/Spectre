const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router.get('/management/users', userCtrl.index);

module.exports = router;
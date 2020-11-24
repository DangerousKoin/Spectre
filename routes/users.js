const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');


router.get('/management/users', userCtrl.index);

// router.get('/users/new', userCtrl.new);
// router.post('/users', userCtrl.create);
// router.post('/users/:id/', userCtrl.addToUserList);

// router.get('/', function(req, res, next) {
//     res.render('/management/users');
//   });

module.exports = router;
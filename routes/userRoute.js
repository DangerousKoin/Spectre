const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCont');

router.get('/user', userCtrl.index);
router.get('/cart', userCtrl.cart);
router.post('/cart', userCtrl.addToCart);
router.delete('/user', userCtrl.delUser);
router.delete('/cart', userCtrl.delFromCart);

module.exports = router;
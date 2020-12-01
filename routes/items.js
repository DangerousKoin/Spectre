const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/items/new', itemsCtrl.new);
router.post('/items', itemsCtrl.addItem);
<<<<<<< HEAD
router.post('/users/:id/cart', itemsCtrl.addToCart);
router.delete('items/:id', itemsCtrl.delItem);
router.delete('users/:id/cart/:id', itemsCtrl.delFromCart);
=======
<<<<<<< HEAD
router.post('/users/:id/cart', itemsCtrl.addToCart);
router.delete('items/:id', itemsCtrl.delItem);
router.delete('users/:id/cart/:id', itemsCtrl.delFromCart);
=======
router.delete('items/:id', itemsCtrl.delete);
>>>>>>> 97d68ce4b18dca04aaa5ff6a7f93b1e7742c7d1a
>>>>>>> f0c3540090b1c166c816c4325652024df5c8a0a6

module.exports = router;
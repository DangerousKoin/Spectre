const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/items/new', itemsCtrl.newItem);
router.post('/items', itemsCtrl.addItem);
router.post('/users/:id/cart', itemsCtrl.addToCart);
router.delete('items/:id', itemsCtrl.delItem);
router.delete('users/:id/cart/:id', itemsCtrl.delFromCart);

module.exports = router;
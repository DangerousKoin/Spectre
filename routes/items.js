const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/items/new', itemsCtrl.new);
router.post('/items', itemsCtrl.addItem);
router.post('/users/:id/cart', itemsCtrl.addToCart);

module.exports = router;
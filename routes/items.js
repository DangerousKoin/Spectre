const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/items/new', itemsCtrl.new);
router.post('/items', itemsCtrl.addItem);
router.delete('items/:id', itemsCtrl.delete);

module.exports = router;
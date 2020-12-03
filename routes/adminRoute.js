const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCont');

router.get('/admin', adminCtrl.index);

router.post('/items', adminCtrl.addItem);
router.delete('/items/:id', adminCtrl.delItem);


module.exports = router;
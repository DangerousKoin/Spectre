const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCont');

router.get('/admin', adminCtrl.index);
router.get('/items', adminCtrl.index);
router.post('/items', adminCtrl.addItem);
router.delete('/items', adminCtrl.delItem);


module.exports = router;
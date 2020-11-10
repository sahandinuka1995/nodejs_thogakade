const express = require('express');

const ItemController = require('../controller/ItemController');

const router = express.Router();

router.post('/saveItem', ItemController.saveItem);
router.get('/getAllItems', ItemController.getAllItems);
router.put('/updateItem', ItemController.updateItem);
router.delete('/deleteItem', ItemController.deleteItem);
router.get('/getItemById', ItemController.getItemById);

module.exports = router;

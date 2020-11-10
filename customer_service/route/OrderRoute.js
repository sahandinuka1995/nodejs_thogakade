const express = require('express');

const OrderController = require('../controller/OrderController');

const router = express.Router();

router.post('/placeOrder', OrderController.placeOrder);
router.get('/getCustomerWithOrders', OrderController.getCustomerWithOrders);

module.exports = router;
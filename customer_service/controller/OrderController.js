const OrderDTO = require('../model/OrderDTO');
const CustomerDTO = require('../model/CustomerDTO');

const placeOrder = (req, resp) => {
    try {
        const order = new OrderDTO({
            cId: req.body.cusId,
            date: new Date().toISOString().split('T')[0],
            items: req.body.oItem
        });

        order.save().then(result => {
            resp.status(200).json(result);
        }).catch(error => {
            resp.status(500).json(error);
        });
    } catch (e) {

    }
};

const getCustomerWithOrders = (req, resp) => {
    CustomerDTO.aggregate([
        {
            $match: {
                customerId: req.headers.id
            }
        },
        {
            $lookup: {
                from: 'orders',
                localField: 'customerId',
                foreignField: 'cId',
                as: 'ordersArray'
            }
        }
    ]).then(result => {
        resp.status(200).json(result);
    }).catch(err => {
        resp.status(500).json(err);
    });
};

module.exports = {
    placeOrder,
    getCustomerWithOrders
}

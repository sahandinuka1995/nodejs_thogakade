const CustomerDTO = require('../model/CustomerDTO');

const saveCustomer = (req, resp) => {
    const customer = new CustomerDTO({
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        customerAddress: req.body.customerAddress,
        customerSalary: req.body.customerSalary
    });

    customer.save().then(result => {
        resp.status(200).json({
            "isSaved": true,
            data: result
        });
    }).catch(err => {
        resp.status(500).json(err);
    });
};

const deleteCustomer = (req, resp) => {
    CustomerDTO.deleteOne({customerId: req.headers.id}).then(result => {
        if (result.deletedCount > 0) {
            resp.status(200).json({isDeleted: true});
        } else {
            resp.status(200).json({isDeleted: false});
        }
    }).catch(err => {
        resp.status(500).json(err);
    });
};

const updateCustomer = (req, resp) => {
    CustomerDTO.updateOne({customerId: req.body.customerId},
        {
            $set: {
                customerName: req.body.customerName,
                customerAddress: req.body.customerAddress,
                customerSalary: req.body.customerSalary,
            }
        }).then(result => {
        console.log(result);
        if (result.nMatched > 0) {
            resp.status(200).json({isUpdated: true});
        } else {
            resp.status(200).json({isUpdated: false});
        }
    }).catch(err => {
        resp.status(500).json(err);
    });
};

const getAllCustomers = (req, resp) => {
    try {
        CustomerDTO.find().then(result => {
            resp.status(200).json({data: result});
        }).catch(error => {
            resp.status(500).json(error);
        });
    } catch (e) {

    }
};

const getCustomerById = (req, resp) => {
    CustomerDTO.findOne({customerId: req.headers.id}).then(result => {
        resp.status(200).json(result);
    }).catch(err => {
        resp.status(500).json(err);
    });
};

const getChartData = (req, resp) => {
    resp.status(200).json({
        data: [12, 3, 32, 55, 23, 78, 54, 84, 26, 27, 26, 93]
    });
}

module.exports = {
    saveCustomer,
    deleteCustomer,
    updateCustomer,
    getAllCustomers,
    getCustomerById,
    getChartData
};

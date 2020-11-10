const ItemDTO = require('../model/ItemDTO');

const saveItem = (req, resp) => {
    const item = new ItemDTO({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        itemQty: req.body.itemQty,
        itemPrice: req.body.itemPrice
    });

    item.save().then(result => {
        resp.status(200).json({
            "isSaved": true,
            data: result
        });
    }).catch(err => {
        resp.status(500).json(err);
    });
};

const deleteItem = (req, resp) => {

};

const updateItem = (req, resp) => {

};

const getAllItems = (req, resp) => {

};

const getItemById = (req, resp) => {

};

module.exports = {
    saveItem,
    updateItem,
    deleteItem,
    getAllItems,
    getItemById
}

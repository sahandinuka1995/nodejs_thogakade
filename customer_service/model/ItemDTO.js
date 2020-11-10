const mongoose = require('mongoose');
const ItemDTO = new mongoose.Schema({
    itemCode: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemQty: {
        type: String,
        required: true
    },
    itemPrice: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('item', ItemDTO);

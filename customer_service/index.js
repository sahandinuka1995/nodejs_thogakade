const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//-----------------------------

const CustomerRoute = require('./route/CustomerRoute');
const ItemRoute = require('./route/ItemRoute');
const AdminUserRoute = require('./route/AdminUserRoute');
const OrderRoute = require('./route/OrderRoute');

//-----------------------------

const app = express();
app.use(express.json({limit: '50mb'})); //-----
app.use(bodyParser());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ijse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    app.listen(3000, () => {
        console.log('Customer Service has been started on port 3000');
    })
}).catch(err => {
    console.log('try Again!');
});

//----------------------------

app.use('/api/v1/customer', CustomerRoute);
// http://localhost:3000/api/v1/customer/saveCustomer(post)==> save customer method

app.use('/api/v1/item', ItemRoute);
app.use('/api/v1/adminUser', AdminUserRoute);
app.use('/api/v1/order', OrderRoute);

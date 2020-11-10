const AdminUserDTO = require('../model/AdminUserDTO');
const bcrypt = require('bcrypt');

const registerUser = (req, resp) => {
    AdminUserDTO.findOne({email: req.body.userEmail}).then(userObject => {
        if (userObject == null) {
            bcrypt.hash(req.body.userPassword, 10, function (err, hash) {
                const user = new AdminUserDTO({
                    email: req.body.userEmail,
                    password: hash,
                    name: req.body.userName,
                    contact: req.body.userContact
                });

                user.save().then(result => {
                    resp.status(200).json({'isRegistered': true});
                }).catch(err => {
                    resp.status(500).json(err);
                });
            });
        } else {
            resp.status(200).json({message: "Email Already Exist"});
        }
    }).catch(error => {

    })


};

const loginUser = (req, resp) => {

    AdminUserDTO.findOne({
        email: req.headers.email
    }).then(res => {
        if (res != null) {
            bcrypt.compare(req.headers.password, res.password, function (err, result) {
                if (result === true) {
                    const data = {
                        email: res.email,
                        name: res.name,
                        contact: res.contact
                    }
                    resp.status(200).json({"isFound": true, data: JSON.stringify(data)});
                } else {
                    resp.status(200).json({"isFound": false});
                }
            });
        }
    }).catch(err => {
        resp.status(500).json(err);
    });
};

module.exports = {
    registerUser,
    loginUser
};

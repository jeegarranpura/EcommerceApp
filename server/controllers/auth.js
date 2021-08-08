const db = require('../config/db');
const mongoose = require('mongoose');
const Register = mongoose.model('Register');
const jwt = require('jsonwebtoken');
const config = require('../config/secret.json')

class AuthController {

    async registerUser({ name, email, password, mobile_no }) {
        Register.findOne({ email: email }, (err, user) => {
            if (!user) {
                const register = new Register;
                register.name = name;
                register.email = email;
                register.password = password;
                register.mobile_no = mobile_no;
                register.save((err, data) => {
                    if (!err) {
                        console.log('user Saved');
                        return user
                    }
                    else{
                        console.log("erro", err)
                    }
                });
            }
            else {
                console.log("user",user)
                console.log("user Already Exists!");
            }
        })
    }
    async loginUsers(req) {
        let data = Register.findOne({email:req.email, password:req.password});
        return data;
    }
}


const controller = new AuthController();
module.exports = controller;

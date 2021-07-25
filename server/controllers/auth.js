const db = require('../config/db');
const mongoose = require('mongoose');
const Register = mongoose.Model('Register');

class AuthController {

    async registerUser({name, email, password}) {
        Register.find({name: name},(err,user) => {
            if(!user){
                const register = new Register;
                register.name = name;
                register.email = email;
                register.password = password;
                register.save((err,data)=>{
                    if(!err){
                        console.log('user Saved');
                    }
                });
            }
            else {
                console.log("user Already Exists!");
            }
        })
    }
}
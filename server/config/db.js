const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jigssoni:jigssoni123456@demo1.3mepc.mongodb.net/ecommerceDemo?retryWrites=true&w=majority').then(
    () =>{
        console.log("Connection Done");
    }
)
require('../models/RegisterModel');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jigssoni:jigssoni123456@demo1.3mepc.mongodb.net/ecommerceDemo?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("connection established");
})
require('../models/RegisterModel');

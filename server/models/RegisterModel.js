const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    }
})

mongoose.model('Register', RegisterSchema);
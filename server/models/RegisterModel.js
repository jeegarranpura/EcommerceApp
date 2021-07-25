const mongoose =  require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile_no:{
        type:String,
        required:true
    },
    timestamps : true
    
})

mongoose.model('Register',RegisterSchema);
const express = require('express');
const db = require('../config/db');
const url = require('url');
const router = express.Router();
const mongoose = require('mongoose');
const Register = mongoose.model('Register');



const config = require('../config/secret.json');

const { authenticateToken } = require('../utils/AuthUtils');


router.post('/getAllUserData', authenticateToken ,getAllUserData);

module.exports = router;


async function getAllUserData(req, res, next){
    const result = await Register.find({});
    if(result !== null){
        
        res.json({result:result,user:req.user});
    }
}

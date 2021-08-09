const express = require('express');
const db = require('../config/db');
const url = require('url');
const router = express.Router();
const auth = require('../controllers/auth');
const jwt = require('jsonwebtoken');
const config = require('../config/secret.json');
const { authenticationToken } = require('../utils/AuthUtils');


router.post('/register/registerUser', userRegister);
router.post('/login/loginUser', loginUser);

module.exports = router;

async function userRegister(req, res, next) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let mobile_no = req.body.mobile_no
    console.log("user Come Here",name + password + email);
    if (name !== undefined && email !== undefined && password !== undefined) {
        const result = await auth.registerUser({name, email, password, mobile_no})
            res.json({
                ...result
        });

    }
}

async function loginUser(req, response, next) {
    let token;
    let result;
    if(req.body.email !== null && req.body.password !== null ) {
        await auth.loginUsers(req.body).then((res) => {
            token =  jwt.sign
           ({
               User_Id : res._id,
               UserEmail : res.email
           },
           config.secret,
           {
               expiresIn: '2 days',
           }
           );
           response.json({
             data : res,
               token
           })
         });
        
    }
    
}

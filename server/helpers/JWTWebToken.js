const JWT=require('jsonwebtoken');
const secreetKey= require('../config/configuration').secreetKey;
//const {secreetKey} =require('../config/configuration');


module.exports={
    generateToken:user=>{
        return JWT.sign({
            iss:'Venkatesh Chinthakindi',
            sub:user.id,
            iat:new Date().getTime(),
            exp:new Date().setDate(new Date().getDate()+1)//
        },secreetKey);
    }
}
const empUser=require('../models/user.model');

module.exports={
    checkEmpExists:async (Email)=>{
        if(await empUser.findOne({Email:Email}))
            return true;
        else
            return false;
    }
}
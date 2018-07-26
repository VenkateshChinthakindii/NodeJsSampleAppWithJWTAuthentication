const user=require('../models/user.model')
const EmpValidation=require('../helpers/validateEmp');
const JWTToken=require('../helpers/JWTWebToken');
module.exports={
    userDefault:function(req,res,next){
         res.status(200).send("<h1>no users available at this time ,please come back soon.....</h1>")
        // next();
    },
    userDetails:(req,res,next)=>{
        res.status(200).json(req.body);
    },
    signUpUserGet:(req,res)=>{
        res.status(200).send('signup');
    },
    signUpUserPost:async (req,res,next)=>{
        const userObj=new user({
            Email:req.body.Email,
            Password:req.body.Password
        });
        // if(await EmpValidation.checkEmpExists(req.body.Email)){
        //     res.status(409).json({status:false,statusMessage:'Employee has already exists'});
        // }
        // else{
            await userObj.save((error,item,effected)=>{
                if(error){
                    console.log(error);
                    res.status(409).json({status:false,statusMessage:'Employee has already exists'});
                }
                else{
                    console.log('item'+item);
                    console.log('effected'+effected);
                    console.log('Id='+userObj.id);
                    res.status(200).json({status:true,statusMessage:'Signup successful',
                    token:JWTToken.generateToken(userObj)});
                }
            });
            
        //}        
    },
    userLogin:async (req,res)=>{
        console.log(req.user)
        res.status(200).json({status:true,statusMessage:'Sign in successful',
        token:JWTToken.generateToken(req.user)});
    },
    userLoginGet:async (req,res)=>{
        await res.status(200).json({status:true,statusMessage:'Sign in home'});
    }
}
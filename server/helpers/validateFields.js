const joi=require('joi');
module.exports={
    validateSchema:(schema)=>{
        return (req,res,next)=>{
            console.log(req.body)
            var result=joi.validate(req.body,schema);
            if(result.error){
                return res.status(400).send("<h3>Invalid data</h3>")
            }
            // console.log('result value :  ',req.value);
            // if(!req.value){
            //     console.log('request value : ',req);
            //     req.value={};
            // }
            // console.log('request value body : ',req.value.body);
            // req.value['body']=result.value;
            next();
        }
    },
    schemas:{
        signupSchema:joi.object().keys({
            Email:joi.string().required().email(),
            Password:joi.string().required().min(8)
        })
    }
}
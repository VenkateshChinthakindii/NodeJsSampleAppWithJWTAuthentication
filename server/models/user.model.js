const mongoose=require('mongoose');
const schema=mongoose.Schema;
const bcrypt=require('bcrypt');

const userSchema = new schema({
    Email:{
        type:String,
        unique:true,
        required:true
    },
    Password:String
});

userSchema.pre('save',async function(next){
    var salt=await bcrypt.genSalt(10);
    console.log('pre'+this.Password)
    this.Password=await bcrypt.hash(this.Password,salt);
    next();
});

userSchema.methods.isValidPassword=async function(Password){
    try{
        console.log(Password)
        console.log(this.Password)
        return await bcrypt.compare(Password,this.Password);
    }
    catch(error){
        throw new Error(error);
    }
}
const userModel=mongoose.model('Emp',userSchema);
module.exports=userModel;
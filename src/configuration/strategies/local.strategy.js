const passport=require('passport');
const passportLocal=require('passport-local').Strategy;
const mongodb=require('mongodb').MongoClient;
module.exports=function(){
    passport.use('local-login',new passportLocal({usernameField:'Email',passwordField:'Password',passReqToCallback:true},
    function(req,Email,Password,done){
        var url='mongodb://localhost:27017/test';  
        mongodb.connect(url,function(err,client){
            if(err){
                done(null,false,{message:'Inavalid Credentials'})
            }
            var db=client.db('test');
            db.collection('users').find({Email:Email},function(err,result){
                if(results.Password==Password)
                 done(null,result);
                else
                 done(null,false,{message:'Invalid Credentials'});
            })
        })
    }));
}
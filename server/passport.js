const passport=require('passport');
const passportStrategy=require('passport-jwt').Strategy;
const localStrategy=require('passport-local').Strategy;
const {ExtractJwt}=require('passport-jwt');
const empModel=require('./models/user.model');
const secreteKey=require('./config/configuration').secreetKey;

//JSON WEB token strategy
passport.use(new passportStrategy({
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:secreteKey
},
async (payload,done)=>{
    try{
        console.log(payload.sub)
        var userObj=await empModel.findOne({_id:payload.sub});
        if(userObj){
            return done(null,userObj);
        }
        done(null,false);
    }
    catch(error){
        done(null,false);
    }    
}));

//LOCAL STRATEGY
passport.use(new localStrategy({
    usernameField:'Email',
    passwordField:'Password'
},async (email,password,done)=>{
    var empObj=await empModel.findOne({Email:email});
    console.log(empObj);
    const res=await empObj.isValidPassword(password);
    if(res){
        done(null,empObj);        
    }
    done(null,false);
}));
const express=require('express');
const app=express();
const morgon=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const mongooseUrl='mongodb://localhost/test'
// const router=express.router();
//const router=require('express-promise-router')();

//middleware code
app.use(morgon('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.Promise=global.Promise;
mongoose.connect(mongooseUrl,(error)=>{if(error!=null){console.log('Not Connected to mongoodb')}
 else {console.log('Connected to mongoodb')}})

//routing code 
app.get('/',function(req,res){
    res.send("<h1>Welcome to Node JS authentication application</h1>")
});
//var userRou=express.Router();
const userRouter=require('express-promise-router')();
const artcileRouter=require('express-promise-router')();
require('./routers/userRoutes')(userRouter);
app.use('/users',userRouter);
require('./routers/articleRoutes')(artcileRouter);
app.use('/article',artcileRouter);

const port=process.env.PORT||3030;
app.listen(port)
console.log('App started listening........at port :',port);
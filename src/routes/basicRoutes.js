const userDataSource=require('../dataSources/usersData');
var passport=require('passport');
module.exports=function(basicRoute){
    basicRoute.get('/Users',function(req,res){
        res.render('users', {title:'Users List',data:[{Name:'Vigneshwara'},{Name:'Vigneshwara1'}]});  
    });
    basicRoute.get('/',function(req,res){
        res.send('<H1>Welcome to node js express framework app</H1>');
    });
    basicRoute.get('/signup',function(req,res){
        res.render('register',{status:'200',message:''});  
    });
    basicRoute.post('/signup',function(req,res){
        userDataSourceObj=new userDataSource();
        userDataSourceObj.insertNewUser(req.body,()=>{
            res.render('register',{status:'200',message:'User creation successful'});  
        });
    });
    basicRoute.get('/login',function(req,res){
        res.render('login');  
    });
    
    basicRoute.post('/login', passport.authenticate('local-login',{failureRedirect:'/login'}),function(req,res){       
        console.log(req.body)
        res.redirect('/articles')  
    });
}
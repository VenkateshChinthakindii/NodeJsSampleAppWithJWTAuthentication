const express=require('express')
const path=require('path')
const bodyParser = require('body-parser')
const app=new express();
const expressSession=require('express-session');
const cookieParser=require('cookie-parser');
var passport=require('passport');

const port=3000;
app.listen(port,function(err){
    if(typeof(err)=="undefined"){
        console.log('Our app running on port number :'+port)
    }
});
// app.use(express.static('public'));
// app.use('/static',express.static('public'));ex://http://localhost:3000/static/images/kitten.jpg
app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views','./src/views');
app.set('view engine','ejs');

app.use(expressSession({secret:'expressSessionSecret'}));
app.use(cookieParser())

var articleRouter=express.Router();
var basicRouter=express.Router();
require('./src/routes/articleRoute')(articleRouter);   
app.use('/articles',articleRouter);
require('./src/routes/basicRoutes',)(basicRouter);

app.use('/',basicRouter);
// app.get('/',function(req,res){
//     res.send('<H1>Welcome to node js express framework app</H1>')
// });
// app.get('/Users',function(req,res){
//     res.json([{Name:'Vigneshwara'},{Name:'Vigneshwara1'}])
// });
// app.get('/Users',function(req,res){
//     res.render('users',{title:'Users List',data:[{Name:'Vigneshwara'},{Name:'Vigneshwara1'}]})
// });
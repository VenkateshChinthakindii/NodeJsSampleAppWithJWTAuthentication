var articles=require('../dataSources/artcileData')
module.exports=function(articlesRouter){
    articlesRouter.route("/")  
    .get(function(req,res){  
        articlesData=new articles();
        articlesData.getAllArticles(function(resultsdata){
            //console.log(resultsdata)
            res.render('users', {title:'Article List',data:resultsdata});  
        });
        
    }); 
} 
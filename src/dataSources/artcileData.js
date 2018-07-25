const mongodb=require('mongodb').MongoClient;
const mongoDbConnection='mongodb://127.0.0.1:27017/test';
module.exports=function(){
    // var articlecollectionSource={}
    this.getAllArticles=function(callback){
        mongodb.connect(mongoDbConnection,function(err,client){
            const db = client.db('test');
           // console.log(client)
            db.collection('articles').find({}).toArray(function(err,results){
                //console.log(results)
                callback(results);
            })
        });
    }
}

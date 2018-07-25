const mongodb=require('mongodb').MongoClient;
const mongoDbConnection='mongodb://127.0.0.1:27017/test';
module.exports=function(){
    this.insertNewUser=function(userObj,callback){
        mongodb.connect(mongoDbConnection,function(error,client){
            const db = client.db('test');
            db.collection('users').insert(userObj,(err,result)=>{
                callback(result);
            })
        });
    }
}
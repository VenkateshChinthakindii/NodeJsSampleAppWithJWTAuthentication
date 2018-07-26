const artcileController=require('../controllers/articleController');
const passport=require('passport');
const passportStrategy=require('../passport');
module.exports=(router)=>{
    router.route('/')
    .get(passport.authenticate('jwt',{session:false}),artcileController.articleDefault);
}
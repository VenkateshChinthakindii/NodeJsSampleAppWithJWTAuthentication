const userController=require('../controllers/userController');
const validateHelper=require('../helpers/validateFields');
const passport=require('passport');
const passportStrategy=require('../passport');
module.exports=function(router){
    router.route('/')
    .get(userController.userDefault)
    .post(validateHelper.validateSchema(validateHelper.schemas.signupSchema),userController.userDetails);

    router.route('/signup')
    .get(userController.signUpUserGet)
    .post(userController.signUpUserPost);
    router.route('/signin')
    .get(userController.userLoginGet)
    .post(validateHelper.validateSchema(validateHelper.schemas.signupSchema),
    passport.authenticate('local',{session:false}),userController.userLogin);

}
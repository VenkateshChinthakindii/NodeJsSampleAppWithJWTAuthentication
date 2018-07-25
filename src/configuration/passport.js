module.exports=function(passport,app){
    app.use(passport.initialize());
    
    app.use(flash());
    passport.serializeUser(function(user,done){
        done(null,user);
    });

    passport.deserializeUser(function(user,done){
        done(null,user);
    });
    require('./strategies/local.strategy')(passport);
}
 var passport = require("passport");
var authController = require("./authController.js");
var bodyParser= require("body-parser");


module.exports = function (app){
    app.get("/auth/signup", authController.signup);

    app.get("/auth/signin", authController.signin);
 
    app.post("/auth/signup", passport.authenticate("local-signup", {
        failureRedirect: "/signup"}),function(req,res){
            res.redirect("/loggedin")
            
        }
    );
 

    app.get("/auth/loggedin", isLoggedIn, authController.index);
 
    app.get("/auth/logout", authController.logout);

    app.post("/auth/signin", passport.authenticate("signin",{
            successRedirect: "/loggedin",
            failureRedirect: "/signin"})
    );

 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
            return next();
        res.redirect("/signin");
 
    }
 
}
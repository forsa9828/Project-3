const passport = require("passport");
const authController = require("./authController.js");
const bodyParser= require("body-parser");


module.exports = app => {
    app.get("/auth/signup", authController.signup);

    app.get("/auth/signin", authController.signin);
 
    app.post("/auth/signup", passport.authenticate("local-signup", {
        failureRedirect: "/signup"}), (req,res) => {
            res.redirect("/loggedin")
            
        }
    );
 
    isLoggedIn = (req, res, next) => {
 
        if (req.isAuthenticated())
            return next();
        res.redirect("/signin");
 
    }

    app.get("/auth/loggedin", isLoggedIn, authController.index);
 
    app.get("/auth/logout", authController.logout);

    app.post("/auth/signin", passport.authenticate("signin",{
            successRedirect: "/loggedin",
            failureRedirect: "/signin"})
    );

 
 
}
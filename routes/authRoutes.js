const passport = require("passport");
const authController = require("./authController.js");
const bodyParser= require("body-parser");


module.exports = app => {
    app.get("/auth/signup", authController.signup);

    app.get("/auth/signin", authController.signin);
      
    app.post("/auth/signup", passport.authenticate("local-signup", {
        failureRedirect: "Signup"}), (req,res) => {
            //res.redirect("/loggedin")
           console.log("done signup")
            
    }),
    
    app.post("/auth/forgotpassword", passport.authenticate("forgotPassword", {
        failureRedirect: "/forgotpassword"}), (req,res) => {
            res.redirect("SignIn")
            console.log(res + "done forgot password")
          
        }
    );
 
    isLoggedIn = (req, res, next) => {
 
        if (req.isAuthenticated())
            return next();
        res.redirect("/signin");
 
    }

    app.get("/auth/loggedin", isLoggedIn, authController.index);
 
    app.get("/auth/logout", authController.logout);

    app.post("/auth/signin", passport.authenticate("signin", {
        failureRedirect: "SignIn"}), (req,res) => {
            res.redirect("SchedulePage")
            console.log(res)
          
        }

      );
    
    // (req, res) =>
    // {
    //     //res.redirect("SchedulePage")
    //     console.log(req);
    //     console.log(res)
    //     console.log("testing")
    //    // console.log(req.isAuthenticated());
    //       //successRedirect: 'SchedulePage',
    //        // failureRedirect: "SignIn"
    //    }
     //  )
   // ));

 
 
}
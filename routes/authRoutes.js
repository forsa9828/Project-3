const passport = require("passport");
const authController = require("./authController.js");
const bodyParser = require("body-parser");


module.exports = app => {
    app.get("/auth/signup", authController.signup);

    app.get("/auth/signin", authController.signin);

    app.get("/forgotpassword", authController.signin)


    app.post("/auth/signup", passport.authenticate("local-signup", {
                successRedirect: "/SchedulePage",
                failureRedirect: "/Signin"
            })
        );
    
    // app.post("/auth/signup", passport.authenticate("local-signup", 
    // function(err, user, info) {
    //     if (err)
    //     console.log(err)
    //         return next(err);
    //     if(!user){
    //         console.log("not user")
    //     }else{
    //         console.log("good to go")
    //     }
    // }));

    // app.post("/forgotpassword", passport.authenticate("forgotPassword", {
    //         successRedirect: "/SchedulePage",
    //         failureRedirect: "/Signin"
    //         })
    //     );

    app.post("/forgotpassword", passport.authenticate("forgotPassword",
    function(err, user, info) {
        if (err) {
            console.log(err)
            return next(err);
        }
        if(!user){
            console.log("not successful for password")
        }else{
            console.log("all good to go for password reset")
        }
    })
    );


  
    // isLoggedIn = (req, res, next) => {

    //     if (req.isAuthenticated())
    //         return next();
    //     res.redirect("/signin");

    // }

    app.get("/auth/loggedin", authController.index);

    app.get("/auth/logout", authController.logout);

    app.post("/signin", passport.authenticate("signin",{
               successRedirect: "/SchedulePage",
                failureRedirect: "/Signin"
            })
        );

        // app.post("/signin", passport.authenticate("signin", 
        // function(err, user, info) {
        //     if (err)
        //         return next(err);
        //     if(!user){
        //         console.log("not user")
        //     }else{
        //         console.log("correct user to correct route")
        //     }
        // }));

}
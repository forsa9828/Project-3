const passport = require("passport");
const authController = require("./authController.js");
const bodyParser = require("body-parser");


module.exports = app => {
    app.get("/auth/signup", authController.signup);

    app.get("/auth/signin", authController.signin);

    app.get("/auth/forgotpassword", authController.signin)


    app.post("/auth/signup", passport.authenticate("local-signup", {
                successRedirect: "/Signin",
                failureRedirect: "/Signin"
            })
        );
   
    app.post("/forgotpassword", passport.authenticate("forgotPassword", {
            successRedirect: "/Signin",
            failureRedirect: "/Signin"
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
            // "/" route doesn't exist. forcing fail for client side. 
        })
    );


}

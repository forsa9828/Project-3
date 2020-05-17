const passport = require("passport");
const authController = require("./authController.js");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = app => {
    app.get("/auth/signup", authController.signup);

    app.get("/signin", authController.signin);


    app.post("/auth/signup", passport.authenticate("local-signup", {
        failureRedirect: "Signup"
    }), (req, res) => {
        //res.redirect("/loggedin")
        console.log("done signup")

    }),

    app.post("/auth/forgotpassword", passport.authenticate("forgotPassword", {
        failureRedirect: "/forgotpassword"
    }), (req, res) => {
        res.redirect("SignIn")
        //  console.log(res + "done forgot password")

    });

    isLoggedIn = (req, res, next) => {

        if (req.isAuthenticated())
            return next();
        res.redirect("/signin");

    }

    app.get("/auth/loggedin", isLoggedIn, authController.index);

    app.get("/auth/logout", authController.logout);

    // app.post("/signin", passport.authenticate("signin",(req,res) => {
    //             console.log("authentication done")
    //            // console.log(res) -this works
    //            // console.log(res.firstName, res.lastName) -this works
    //             res.redirect("schedulePage")
    // })


    app.post("/signin", passport.authenticate("signin"));
    //  {
    //            successRedirect: "SchedulePage",
    //             failureRedirect: "SignIn"
    //     }
    
    
    // (req, res) => {
    //        // console.log("authentication done")
    //        // console.log(res) //-this works
    //         //console.log(res.) //-this works
    //     })


        // {
        //           successRedirect: "SchedulePage",
        //            failureRedirect: "SignIn"
        //        }
        // )


        // {
        //     failureRedirect: "/SignIn"}), (req,res) => {
        //         //res.redirect("SchedulePage")
        //         //console.log(res)

        //     }

//   ));


}
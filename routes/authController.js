module.exports = {

    signup: (req, res) => {
        res.redirect("/SchedulePage");
        console.log("signup")
        // res.status(200)
        // console.log("success!")
    },


    signin: (req, res) => {
        //res.redirect, redirect to the route for React
       console.log("trying to go to signin")
       res.redirect("/SchedulePage");
        
    },

    index: (req, res) => {
        res.render("/SchedulePage");

    },

    logout: (req, res) => {
        req.session.destroy((err) => {
            res.redirect("/Signin");
        
        });
        
    }
};
module.exports = {

    signup: (req, res) => {
        res.redirect("SignUp");
        console.log("signup")
        // res.status(200)
        // console.log("success!")
    },


    signin: (req, res) => {
        res.redirect("SchedulePage");// need to  update to res.redirect. causing a "no default engine message"
        //res.redirect, redirect to the route for React
        
    },

    index: (req, res) => {
        res.render("SchedulePage");

    },

    logout: (req, res) => {
        req.session.destroy((err) => {
            res.redirect('SignIn');
        
        });
        
    }
};
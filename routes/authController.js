module.exports = {

    signup: (req, res) => {
        //res.render("/signup");
        console.log("signup")
        // res.status(200)
        // console.log("success!")
    },


    signin: (req, res) => {
        // res.render("/loggedin");// need to  update to res.redirect. causing a "no default engine message"
        console.log("hit")
        //res.redirect, redirect to the route for React
        
    },

    index: (req, res) => {
        res.render("/loggedin");

    },

    logout: (req, res) => {
        req.session.destroy((err) => {
            res.redirect('/');
        
        });
        
    }
};
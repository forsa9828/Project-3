module.exports = {

    signup: (req, res) => {
        res.render("/signup");
        // res.status(200)
        // console.log("success!")
    },


    signin: (req, res) => {
        res.render("/loggedin");
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
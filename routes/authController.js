module.exports = {

    signup: (req, res) => {
        res.render("/signup");
    },


    signin: (req, res) => {
        res.render("/loggedin");
        
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
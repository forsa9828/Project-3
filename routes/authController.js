module.exports = {

    signup: function(req, res) {
        res.render("/signup");
    },


    signin: function(req, res) {
        res.render("/loggedin");
        
    },

    index: function(req, res) {
        res.render("/loggedin");

    },

    logout: function(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/');
        
        });
        
    }
};
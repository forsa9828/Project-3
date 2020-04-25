var bCrypt = require("bcrypt");
var UserDB = require("../../models");
var LocalStrategy = require("passport-local").Strategy;


module.exports = function(passport, user) {
    //SIGN-UP 
    passport.use("local-signup", new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, 8, null);
            };

            UserDB.user.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, {
                        message: "That email is already taken."
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        email: req.body.email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    UserDB.user.create(data).then(function(newUser) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    // SIGN-IN for existing users
    passport.use("signin", new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {

            UserDB.user.findOne({
                where: {
                    email: email
                }
            }).then(function(user, err) {

                if (!user) {
                    return done(null, false, {
                        message: "Email does not exist."
                    });
                }
                var validPassword = bCrypt.compareSync(password, user.password);

                if (!validPassword) {
                    return done(null, false, {
                        message: "Incorrect Password."
                    });
                }

                var userInfo = user.get();
                console.log(userInfo);
                return done(null, userInfo);

            }).catch(function(err) {
                return done(null, false, {
                    message: "Sorry! Something weng wrong with your sign in."
                });

            });

        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        UserDB.user.findByPk(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

};
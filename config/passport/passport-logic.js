const bCrypt = require("bcrypt");
const UserDB = require("../../models");
const LocalStrategy = require("passport-local").Strategy;


module.exports = (passport, user) => {
    //SIGN-UP 
    passport.use("local-signup", new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        (req, email, password, done) => {
            let generateHash = password => {
                return bCrypt.hashSync(password, 8, null);
            };

            UserDB.user.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (user) {
                    return done(null, false, {
                        message: "That email is already taken."
                    });
                } else {
                    let userPassword = generateHash(password);
                    let data = {
                        email: req.body.email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        employmentType: req.body.employmentType,
                        phone: req.body.phone, 
                        emergencyContact: req.body.emergencyContact,
                        emergencyContactPhone: req.body.emergencyContactPhone
                    };

                    UserDB.user.create(data).then(newUser => {
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
        (req, email, password, done) => {

            UserDB.user.findOne({
                where: {
                    email: email
                }
            }).then((user, err) => {

                if (!user) {
                    return done(null, false, {
                        message: "Email does not exist."
                    });
                }
                let validPassword = bCrypt.compareSync(password, user.password);

                if (!validPassword) {
                    return done(null, false, {
                        message: "Incorrect Password."
                    });
                }

                let userInfo = user.get();
                console.log("soo"+ userInfo);
                return done(null, userInfo);

            }).catch(err => {
                return done(null, false, {
                    message: "Sorry! Something weng wrong with your sign in."
                });

            });

        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        UserDB.user.findByPk(id).then(user => {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

};
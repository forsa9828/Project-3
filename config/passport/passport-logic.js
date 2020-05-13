const bCrypt = require("bcrypt");
const UserDB = require("../../models");
const LocalStrategy = require("passport-local").Strategy;


module.exports = (passport, user) => {
    //SIGN-UP 
    passport.use("local-signup", new LocalStrategy({
            usernameField: "firstname",
            passwordField: "lastname",
            passReqToCallback: true //The purpose of a verify callback is to find the user that possesses a set of credentials.
        },
        (req, firstname, lastname, done) => {
//need to build it so it looks for first name and last name that is entered by Manager
            UserDB.user.findAll({
                    where: {
                        firstname: firstname,
                        lastname: lastname
                    }
                //if found first name and last then, then allow to create rest 
                }).then(user => {
                    if (user) {
                        let password=req.body.password
                        console.log(password)
                        let generateHash = password => {
                            return bCrypt.hashSync(password, 8);
                        };
                        
                        let userPassword = generateHash(password);
                        console.log("new" + userPassword)
                        let data = {
                            email: req.body.email,
                            password: userPassword,
                            employmentType: req.body.employmentType,
                            phone: req.body.phone, 
                            emergencyContact: req.body.emergencyContact,
                            emergencyContactPhone: req.body.emergencyContactPhone
                        }
                        //update method instead of create, list which fields to update w/ its values 
                        //If we don't find a user in the database, that doesn't mean there is an application error,
                   // so we use `null` for the error value, and `false` for the user value
                        
                    UserDB.user.update(data, {
                            where: {
                                firstname: firstname,
                                lastname: lastname
                            }
                            }).then(newUser => {
                                console.log(newUser)
                                return done(null);
                            });

                        
                }else{
                    console.log("does not exist")
                
//old way
            // UserDB.user.findOne({
            //     where: {
            //         email: email
            //     }
            // }).then(user => {
            //     if (user) {
            //         return done(null, false, {
            //             message: "That email is already taken."
            //         });
            //if unable to find inforamtion by first name and last name, CANNOT create acct
                // } else {
                    // console.log("not in system")
                    // let userPassword = generateHash(password);
                    // let data = {
                    //     email: req.body.email,
                    //     password: userPassword,
                    //     firstname: req.body.firstname,
                    //     lastname: req.body.lastname,
                    //     employmentType: req.body.employmentType,
                    //     phone: req.body.phone, 
                    //     emergencyContact: req.body.emergencyContact,
                    //     emergencyContactPhone: req.body.emergencyContactPhone
                    // };

                    //  UserDB.user.create(data).then(newUser => {
                    //     if (!newUser) {
                    //         return done(null, false);
                    //     }
                    //     if (newUser) {
                    //         return done(null, newUser);
                    //     }
                    // });

                }
            });
        }
    ));

    console.log("testing")

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
                console.log(user)
                let validPassword = bCrypt.compareSync(password, user.password);

                if (!user) {
                    console.log("not user")
                    return done(null, false, {
                        message: "Email does not exist."
                    });
                }

                if (!validPassword) {
                    console.log("incorrect password")
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
        console.log("got here")
        done(null, user.id);
        console.log(user.id)
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
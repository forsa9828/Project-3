const bCrypt = require("bcrypt");
const UserDB = require("../../models");
const LocalStrategy = require("passport-local").Strategy;


module.exports = (passport, user) => {
    //SIGNUP
     passport.use("local-signup", new LocalStrategy({
        usernameField: "firstName",
        passwordField: "lastName",
        passReqToCallback: true
    }, 
    (req, firstName, lastName, done) => {
        //console.log(email, password)
        UserDB.user.findAll({
            where: {
                firstName: firstName,
                lastName: lastName
            }
        }).then((user, err) => {
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

                if([user] == ""){
                    console.log("no user info in db")
                    return done(null);
                        }
                //else  if({

                if(user){
                    console.log(user)
                    UserDB.user.update(data, {
                        where: {
                            firstName: req.body.firstName,
                            lastName: req.body.lastName
                        }
                        }).then(newUser => {
                            //console.log(firstName, lastName)
                            console.log("new user created!")
                            console.log(data)
                        // console.log(newUser)
                            return done(null);
                        });
                }else{
                    console.log("nothing else to do");
                    return done(null);
                }

            });
        }
    ));



   
//     console.log("testing")

//     // SIGN-IN for existing users
    passport.use("signin", new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        (req, email, password, done) => {
            console.log(email, password)
            UserDB.user.findOne({
                where: {
                    email: email
                }
            }).then((user, err) => {
               console.log(user) //showing null if user email doesn't exist
                let validPassword = bCrypt.compareSync(password, user.password);

                if (!user) {
                    console.log("not user")
                    return done(null, false);
                }

                if (!validPassword) {
                    console.log("incorrect password")
                    return done(null, false);
                }

                let userInfo = user.get();
                console.log(userInfo)
                console.log("correct user!");
                return done(null, userInfo);

            }).catch(err => {
                return done(null, false);

            });

        }
    ));

//forgotPassword
    passport.use("forgotPassword", new LocalStrategy({
        usernameField: "email",
        //passwordField: "lastName",
        passReqToCallback: true //The purpose of a verify callback is to find the user that possesses a set of credentials.
    },
    (email) => {
        console.log(email)
        UserDB.user.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                console.log(email)
               console.log(user)
                if (user) {
                    let password= password
                    console.log(password)
                    let generateHash = password => {
                        return bCrypt.hashSync(password, 8);
                    };
                    
                    let userPassword = generateHash(password);
                    console.log("new" + userPassword)
                    let newPass= {
                        password: userPassword,   
                    }
                 
                    UserDB.user.update(newPass, {
                            where: {
                                email: req.body.email
                            }
                            }).then(newPass=> {
                                console.log(email)
                                console.log("new password created!")
                               console.log(newPass)
                               //console.log(newUser)
                                //return done(null);
                            });

                
                 }else{
                    console.log("user does not exist = password change failed")
                    return 

            }
        });
    }
));

console.log("got here2")
    passport.serializeUser((user, done) => {
        console.log("got here")
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
const bCrypt = require("bcrypt");
const UserDB = require("../../models");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport, user) => {
	//SIGN-UP
	passport.use(
		"local-signup",
		new LocalStrategy(
			{
				usernameField: "firstName",
				passwordField: "lastName",
				passReqToCallback: true
			},
			(req, firstName, lastName, done) => {
				
				UserDB.user
					.findAll({
						where: {
							firstName: req.body.firstName,
							lastName: req.body.lastName
						}
					})
					.then(user => {
						console.log(firstName, lastName);
						console.log([user] == "");
						if ([user] == "") {
							console.log("no user info in db");
							return done(null);

						} else if ([user] != "") {
							let password = req.body.password;
							let generateHash = password => {
								return bCrypt.hashSync(password, 8);
							};

							let userPassword = generateHash(password);
							console.log("new" + userPassword);
							let data = {
								email: req.body.email,
								password: userPassword,
								employmentType: req.body.employmentType,
								phone: req.body.phone,
								emergencyContact: req.body.emergencyContact,
								emergencyContactPhone: req.body.emergencyContactPhone
							};

							UserDB.user
								.update(data, {
									where: {
										firstName: req.body.firstName,
										lastName: req.body.lastName
									}
								})
								.then(newUser => {
									console.log("new user created!");
									console.log(newUser);
									return done(null);
								});
						} else {
							console.log("nothing else to do");
						}
					});
			}
		)
	);


	// SIGN-IN for existing users
	passport.use(
		"signin",
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password",
				passReqToCallback: true
			},
			(req, email, password, done) => {
				console.log(email, password);
				UserDB.user
					.findOne({
						where: {
							email: email
						}
					})
					.then((user, err) => {
						console.log(user); 
						let validPassword = bCrypt.compareSync(password, user.password);

						if (!user) {
							console.log("not user");
							return done(null, false);
						}

						if (!validPassword) {
							console.log("incorrect password");
							return done(null, false);
						}

						let userInfo = user.get();
						console.log(userInfo);
						console.log("correct user!");
						return done(null, userInfo);
					})
					.catch(err => {
						return done(null, false);
					});
			}
		)
	);

    //forgotPassword
    passport.use(
		"forgotPassword",
		new LocalStrategy(
			{
				usernameField: "email",
				//passwordField: "lastName",
				passReqToCallback: true //The purpose of a verify callback is to find the user that possesses a set of credentials.
			},
			(req, email, password, done) => {
				console.log(email);
				//need to build it so it looks for first name and last name that is entered by Manager
				UserDB.user
					.findOne({
						where: {
							email: email
						}
					})
					.then(user => {
						//console.log(user.dataValues)
						if (user) {
							password = req.body.password;
							console.log(password);
							let generateHash = password => {
								return bCrypt.hashSync(password, 8);
							};

							let userPassword = generateHash(password);
							console.log("new" + userPassword);
							let data = {
								password: userPassword
							};

							UserDB.user
                                .update(data,
                                    {
									where: {
										email: email
									}
                                }
                                )
								.then(newUser => {
									//console.log(data)
									console.log(newUser);
									return done(null);
								});
						} else {
                            console.log("user does not exist = password change failed");
                            
						}
					});
			}
		)
	);


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

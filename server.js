require("dotenv").config();
const express = require("express");

const db = require("./models");

const app = express();
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;



// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//For Passport
app.use(
	session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());



// app.set("views", "html"); 
//can take this out don't need due to not using template engine


// Routes
require("./routes/apiRoutes")(app);
require("./routes/authRoutes")(app);
require("./config/passport/passport-logic")(passport, db.user);
require("./routes/frontEndRoutes")(app);

const syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
	syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
	app.listen(PORT, function() {
		console.log(
			"==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
			PORT,
			PORT
		);
	});
});

module.exports = app;

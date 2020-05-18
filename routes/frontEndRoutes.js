const path = require("path");

module.exports = function(app) {
app.get("/SchedulePage", function(req, res) { 
    res.sendFile(path.join(__dirname, "./../ABOT/src/pages/SchedulePage.js"));
   });

app.get("/Signin", function(req, res) { 
    res.sendFile(path.join(__dirname, "./../ABOT/src/pages/Signin.js"));
});

app.get("/Signup", function(req, res) { 
    res.sendFile(path.join(__dirname, "./../ABOT/src/pages/Signup.js"));
    });
}


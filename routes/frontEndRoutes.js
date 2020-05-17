const path = require("path");

module.exports = function(app) {
app.get("/SchedulePage", function(req, res) { 
    res.sendFile(path.join(__dirname, "./../ABOT/src/pages/SchedulePage.js"));

   });
}


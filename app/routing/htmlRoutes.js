// Dependency: npm i path
var path = require('path');

// Route to survey.html or default to home.html
module.exports = function(app) {
    // Use Express to route/ perform GET request to survey.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // if survey.html is not found, default to home.html
    app.use("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}


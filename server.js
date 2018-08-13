// Connecting to dependencies: Express, BodyParser, Path
const express = require('express');
const bodyParser = require('body-parser');

// connecting to Express & setting up local PORT: 3306
const app = express(); 
const jsonParser = bodyParser.json()

const PORT = process.env.PORT || 3606; 

// connecting to BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsonParser);

// connecting to Router:
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// connecting to PORT
// console.log() PORT connection
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });



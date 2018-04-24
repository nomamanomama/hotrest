//Dependencies
//

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('./routing/apiroutes.js')(app);
require('./routing/htmlroutes.js')(app);


// Listening on PORT
app.listen(PORT, function(){
   console.log("App listening on port: " + PORT);
})
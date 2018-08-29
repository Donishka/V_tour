require('./api/data/dbconnection.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
var routes = require('./api/routes');

// Define the port to run on
app.set('port', 4201);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory before defining routes
app.use(express.static('src'));


// Add some routing
app.use('/', routes);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Connected to port ' + port);
});

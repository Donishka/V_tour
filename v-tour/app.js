const { mongoose }=require('./api/data/dbconnection.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var userController = require('./api/controllers/userController.js');
var travelAgentController = require('./api/controllers/travelAgent/travelAgentController.js');
var serviceproviderController = require('./api/controllers/serviceProvider/serviceproviderController.js');
var clientController = require('./api/controllers/client/clientController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(4201, () => console.log('Server started at port : 4201'));

app.use('/users', userController);
app.use('/travelagents', travelAgentController);
app.use('/serviceproviders', serviceproviderController);
app.use('/clients', clientController);
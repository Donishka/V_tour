const { mongoose }=require('./api/functions/dbconnection.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path  = require('path');
const multer = require('multer');

var userController = require('./api/controllers/userController.js');
var travelAgentController = require('./api/controllers/travelAgent/travelAgentController.js');
var serviceproviderController = require('./api/controllers/serviceProvider/serviceproviderController.js');
var clientController = require('./api/controllers/client/clientController.js');
var loginController = require('./api/controllers/login/loginUserController');
var packageController=require('./api/controllers/package/packageController.js');
var itenararyPaymentController = require('./api/controllers/itenararyPayment/itenararyPaymentController.js');
var itineraryController = require('./api/controllers/itinerary/itineraryController');


const port = process.env.PORT ||4201;

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(cors(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST GET PUT DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}));*/

app.listen(port, () => console.log('Server started at port :'+ port));

app.use('/users', userController);
app.use('/travelagents', travelAgentController);
app.use('/serviceproviders', serviceproviderController);
app.use('/clients', clientController);
app.use('/packages', packageController);
app.use('/itenararypayments', itenararyPaymentController);
app.use('', loginController);
app.use('/itinerary', itineraryController);


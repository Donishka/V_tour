const { mongoose }=require('./api/data/dbconnection.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var userController = require('./api/controllers/userController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(4201, () => console.log('Server started at port : 4201'));


app.use('/users', userController);
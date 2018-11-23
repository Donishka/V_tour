'use strict';
var moment = require('moment');
var jwt = require('../lib/jwt-simple-error-identify').jwt;
var ExpiredToken = require('../lib/jwt-simple-error-identify').ExpiredToken;
var InvalidAlgorithm = require('../lib/jwt-simple-error-identify').InvalidAlgorithm;

var payload = {
	foo: 'bar',
	exp: moment().unix() //expiration time.
}
var secret = 'xxx';

 //encode
var token = jwt.encode(payload, secret);


// decode
try{
	var decoded = jwt.decode(token, secret);
	console.log(decoded); //=> { foo: 'bar' }
}catch(err){
	if(err instanceof ExpiredToken){
		//do something, for example if you are using oauth you can use the refresh token to obtain a new access token.
		console.log('Token Expired');
	}
	if(err instanceof InvalidAlgorithm){
		//do something, for example you can try with other algorithm.
		console.log('Invalid Algorithm');
	}
}	
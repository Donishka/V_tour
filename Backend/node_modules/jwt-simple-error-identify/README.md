# jwt-simple-error-identify
Easy use of jwt, based on the jwt-simple module, but you can identify the type of error ocurred, if is the case.
Important, this module gives you the same functionality that the jwt-simple module, but extended. With jwt-simple-error-identify you can know the error type, so in your code, you can check it with the 'instance of' operator. If you do not need that, use jwt-simple instead.


## Install
npm install --save jwt-simple-error-identify

## Usage

```javascript
var jwt = require('jwt-simple-error-identify').jwt;
var ExpiredToken = require('jwt-simple-error-identify').ExpiredToken; //the error
var InvalidAlgorithm = require('jwt-simple-error-identify').InvalidAlgorithm; //the error

//Or you can do that
/*
*	var JWT = require(jwt-require-error-identify);
*	var jwt = JWT.jwt;
*	var ExpiredToken = JWT.ExpiredToken
*	//and so on with all type of errors.
*
*/

var payload = {
	foo: 'bar',
	exp: moment().unix() //The module recognize the exp params and use it as the expiration time, 
						//so do not use it for another purpose.
						// I use moment for the example you can use whatever you want.
					   //Using moment().unix(), the token is expired after creation so we will catch the ExpiredToken error.
}
var secret = 'xxx';

//encode
var token = jwt.encode(payload, secret);

// decode
try{
	var decoded = jwt.decode(token, secret);
	console.log(decoded); //=> { foo: 'bar' }
	//In this case that won't shown because the decode will throw an ExpiredToken error.
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
```

## Error types
	
`InvalidToken`, `InvalidAlgorithm`, `ExpiredToken`, `SignatureError`.

The most general errors are `InvalidToken` and `InvalidAlgorithm`.
Exist also `ExpiredToken` and `SignatureError`, that inherit from `InvalidToken`.
   
Note that if you use `ExpiredToken` or `SignatureError` in the catch,
you also need to check the `InvalidToken` because it could be thrown 
in cases that `ExpiredToken` and `SignatureError` not.
    

## encode params
```javascript
/*
*	jwt.encode(payload, secret, algorithm)
*/
```
NOTE: algorithm is optional.

## decode params

```javascript
/*
 * jwt.decode(token, key, noVerify, algorithm)
 */

// decode, by default the signature of the token is verified
var decoded = jwt.decode(token, secret);
console.log(decoded); //=> { foo: 'bar' }

// decode without verify the signature of the token,
// be sure to KNOW WHAT ARE YOU DOING because not verify the signature
// means you can't be sure that someone hasn't modified the token payload
var decoded = jwt.decode(token, secret, true);
console.log(decoded); //=> { foo: 'bar' }

// decode with a specific algorithm (not using the algorithm described in the token payload)
var decoded = jwt.decode(token, secret, false, 'HS256');
console.log(decoded); //=> { foo: 'bar' }
```

## Algorithms

By default the algorithm to encode is `HS256`.

The supported algorithms for encoding and decoding are `HS256`, `HS384`, `HS512` and `RS256`.

```javascript
// encode using HS512
jwt.encode(payload, secret, 'HS512')


```

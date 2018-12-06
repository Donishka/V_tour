const express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');

const loginModel = require('../../data/login/login.model');

var {TravelAgent} = require('../../data/travelAgent/travelagent.model.js');
var {ServiceProvider} = require('../../data/serviceProvider/serviceprovider.model.js');
var {Client} = require('../../data/client/client.model.js');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ebuwa.tech@gmail.com',
        pass: 'fucku'
    }
});


/*
router.get('/', function (req, res) {
    res.send('<form action="forgotpassword/reset" method="POST">' +
        '<input type="email" name="email" value="" placeholder="Enter your email address..." />' +
        '<input type="submit" value="Reset Password" />' +
        '</form>');
});*/

router.post('/reset', function (req, res) {
    if (req.body.email !== undefined) {
        var emailAddress = req.body.email;

        loginModel.findByClientEmail(emailAddress, function (err, user) {
            if (err) throw err;

            if (!user) {
                loginModel.findBySPEmail(emailAddress, function (err, user) {
                    if (err) throw err;

                    if (!user) {
                        loginModel.findByTAgentEmail(emailAddress, function (err, user) {
                            if (err) throw err;

                            if (!user) {
                                res.json({ state: false, msg: "No user found" });
                            } else {
                                var payload = {
                                    id: user._id,
                                    email: emailAddress
                                };
                                
                                var secret ='fe1a1915a379f3be5394b64d14794932-1506868106675';

                                var token = jwt.encode(payload, secret);
                                var mailOptions = {
                                    from: 'anemanda175@gmail.com',
                                    to: user.email,
                                    subject: 'Password Reset V Tour',
                                    html: '<a href="http://localhost:4201/forgotpassword/resetpassword/' + payload.id + '/' + token + '">Reset password</a>'
                                };
                                transporter.sendMail(mailOptions, function (error, info) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log('Email sent: ' + info.response);
                                    }
                                });
                                res.send('<a href="localhost:4201/forgotpassword/resetpassword/' + payload.id + '/' + token + '">Reset password</a>');
                            }
                        });
                    }else{
                        var payload = {
                            id: user._id,
                            email: emailAddress
                        };
                        var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';

                        var token = jwt.encode(payload, secret);

                        var mailOptions = {
                            from: 'anemanda175@gmail.com',
                            to: user.email,
                            subject: 'Password Reset V Tour',
                            html: '<a href="http://localhost:4201/forgotpassword/resetpassword/' + payload.id + '/' + token + '">Reset password</a>'
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });
                        res.send('<a href="resetpassword/' + payload.id + '/' + token + '">Reset password</a>');
                    }
                    
                });
            }else{
                var payload = {
                    id: user._id,
                    email: emailAddress
                };
                var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';

                var token = jwt.encode(payload, secret);

                var mailOptions = {
                    from: 'anemanda175@gmail.com',
                    to: user.email,
                    subject: 'Password Reset V Tour',
                    html: '<a href="http://localhost:4201/forgotpassword/resetpassword/' + payload.id + '/' + token + '">Reset password</a>'
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.send('<a href="resetpassword/' + payload.id + '/' + token + '">Reset password</a>');
            }
           
        });        
    } else {
        res.send('Email address is missing.');
    }
});

router.get('/resetpassword/:id/:token', function (req, res) {    
    // TODO: Fetch user from database using
    // req.params.id
    // TODO: Decrypt one-time-use token using the user's
    // current password hash from the database and combine it
    // with the user's created date to make a very unique secret key!
    // For example,
    // var secret = user.password + ‘-' + user.created.getTime();
    var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';
    var payload = jwt.decode(req.params.token, secret);
    // TODO: Gracefully handle decoding issues.
    // Create form to reset password.

    res.send('<form action="/forgotpassword/resetpassword" method="POST">' +
        '<input type="hidden" name="id" value="' + payload.id + '" />' +
        '<input type="hidden" name="token" value="' + req.params.token + '" />' +
        '<input type="password" name="password" value="" placeholder="Enter your new password..." />' +
        '<input type="submit" value="Reset Password" />' +
        '</form>');
});

router.post('/resetpassword', function (req, res) {
    TravelAgent.findById(req.body.id, (err, user) => {
        if (err) throw err;
        if(!user){
            ServiceProvider.findById(req.body.id, (err, user) => {
                if (err) throw err;
                if(!user){
                    Client.findById(req.body.id, (err, user) => {
                        if (err) throw err;
                        if(!user) {
                        }else{//Client
                            
                        }
                    });
                }else{//Service Provider
                    var serviceprovider = {
                        _id: req.body.id,
                        password: req.body.password,
                    };
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(serviceprovider.password, salt, function (err, hash) {
                            serviceprovider.password = hash;
                            if (err) throw err;
                            ServiceProvider.findByIdAndUpdate(req.body.id, { $set: serviceprovider }, { new: true }, (err, doc) => {
                                if (!err) { console.log("Pass Reset Completed"); }
                                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
                            });
                        });
                    });
                }
            });
        }else{//Travel Agent
           var travelagent = {
                _id: req.body.id,
                password: req.body.password,
           };
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(travelagent.password, salt, function (err, hash) {
                    travelagent.password = hash;
                    if (err) throw err;
                    TravelAgent.findByIdAndUpdate(req.body.id, { $set: travelagent }, { new: true }, (err, doc) => {
                        console.log(travelagent);
                        if (!err) { console.log("Pass Reset Completed"); }
                        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
                    });
                });
            });
        }
    });
    var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';

    var payload = jwt.decode(req.body.token, secret);

    // TODO: Gracefully handle decoding issues.
    // TODO: Hash password from
    // req.body.password

    res.send('Your password has been successfully changed.');
});

module.exports=router;

const express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const bcrypt = require('bcryptjs');
var jwt = require('jwt-simple-error-identify').jwt;

var ExpiredToken = require('jwt-simple-error-identify').ExpiredToken; //the error
var InvalidAlgorithm = require('jwt-simple-error-identify').InvalidAlgorithm; //the error
var InvalidToken = require('jwt-simple-error-identify').InvalidToken; //the error

const loginModel = require('../../data/login/login.model');

var {TravelAgent} = require('../../data/travelAgent/travelagent.model.js');
var {ServiceProvider} = require('../../data/serviceProvider/serviceprovider.model.js');
var {Client} = require('../../data/client/client.model.js');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anemanda175@gmail.com',
        pass: 'vtourtempory'
    }
});

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
                                console.log('NO USER');
                                res.json({ state: false, msg: "No user found" });
                            } else {
                                console.log('TA');
                                var payload = {
                                    id: user._id,
                                    email: emailAddress
                                };
                                var secret =user.password+'fe1a1915a379f3be5394b64d14794932-1506868106675';

                                var token = jwt.encode(payload, secret);
                                var mailOptions = {
                                    from: 'anemanda175@gmail.com',
                                    to: user.email,
                                    subject: 'Password Reset V Tour',
                                    html: '<p>Please use below link to reset your password</p>'+'<a href="http://localhost:4201/forgotpassword/resetpassword/' + payload.id + '/' + token + '">Click Here</a>'
                                };
                                transporter.sendMail(mailOptions, function (error, info) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log('Email sent: ' + info.response);
                                    }
                                });
                                res.json({ state: true, msg: "Email has been sent with instruction to reset your password" });
                            }
                        });
                    }else{
                        console.log('SP');
                        var payload = {
                            id: user._id,
                            email: emailAddress
                        };
                        var secret = user.password +'fe1a1915a379f3be5394b64d14794932-1506868106675';

                        var token = jwt.encode(payload, secret);

                        var mailOptions = {
                            from: 'anemanda175@gmail.com',
                            to: user.email,
                            subject: 'Password Reset V Tour',
                            html: '<p>Please use below link to reset your password</p>' + '<a href="http://localhost:4201/forgotpassword/resetpassword/' + payload.id + '/' + token + '">Click Here</a>'
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                        });
                        res.json({ state: true, msg: "Email has been sent with instruction to reset your password" });
                    }
                    
                });
            }else{
                console.log('C');
                var payload = {
                    id: user._id,
                    email: emailAddress
                };
                
                var secret = user.password +'fe1a1915a379f3be5394b64d14794932-1506868106675';

                var token = jwt.encode(payload, secret);

                var mailOptions = {
                    from: 'anemanda175@gmail.com',
                    to: user.email,
                    subject: 'Password Reset V Tour',
                    html: '<p>Please use below link to reset your password</p>' + '<a href="http://localhost:4201/forgotpassword/resetpassword/' + payload.id + '/' + token + '">Click Here</a>'
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.json({ state: true, msg: "Email has been sent with instruction to reset your password" });
            }          
        });        
    } else {
        res.send(false);
    }
});

router.get('/resetpassword/:id/:token', function (req, res,next) {
    TravelAgent.findById(req.params.id, (err, user) => {
        if (err) throw err;
        if (!user) {
            ServiceProvider.findById(req.params.id, (err, user) => {
                if (err) throw err;
                if (!user) {
                    Client.findById(req.params.id, (err, user) => {
                        if (err) throw err;
                        if (!user) {
                        }else{
                            var secret = user.password + 'fe1a1915a379f3be5394b64d14794932-1506868106675';
                            try {
                                var payload = jwt.decode(req.params.token, secret);

                                res.send('<form action="/forgotpassword/resetpassword" method="POST">' +
                                    '<input type="hidden" name="id" value="' + payload.id + '" />' +
                                    '<input type="hidden" name="token" value="' + req.params.token + '" />' +
                                    '<input type="password" name="password" value="" placeholder="Enter your new password..." />' +
                                    '<input type="submit" value="Confirm Password" />' +
                                    '</form>'
                                );
                            } catch (err) {
                                if (err instanceof ExpiredToken) {
                                    res.send('<p>Expired Link</p>');
                                    console.log('Token Expired');
                                }
                                if (err instanceof InvalidAlgorithm) {
                                    res.send('<p>Expired Link</p>');
                                    console.log('Invalid Algorithm');
                                }
                                if (err instanceof InvalidToken) {
                                    res.send('<p>Expired Link</p>');
                                    console.log('Invalid Token');
                                }
                            }
                        }
                    });
                }else{
                    var secret = user.password + 'fe1a1915a379f3be5394b64d14794932-1506868106675';
                    try {
                        var payload = jwt.decode(req.params.token, secret);

                        res.send('<form action="/forgotpassword/resetpassword" method="POST">' +
                            '<input type="hidden" name="id" value="' + payload.id + '" />' +
                            '<input type="hidden" name="token" value="' + req.params.token + '" />' +
                            '<input type="password" name="password" value="" placeholder="Enter your new password..." />' +
                            '<input type="submit" value="Confirm Password" />' +
                            '</form>'
                        );
                    } catch (err) {
                        if (err instanceof ExpiredToken) {
                            res.send('<p>Expired Link</p>');
                            console.log('Token Expired');
                        }
                        if (err instanceof InvalidAlgorithm) {
                            res.send('<p>Expired Link</p>');
                            console.log('Invalid Algorithm');
                        }
                        if (err instanceof InvalidToken) {
                            res.send('<p>Expired Link</p>');
                            console.log('Invalid Token');
                        }
                    }
                }
            });
        }else{

            var secret = user.password + 'fe1a1915a379f3be5394b64d14794932-1506868106675';
            try {
                var payload = jwt.decode(req.params.token, secret);

                res.send('<form action="/forgotpassword/resetpassword" method="POST">' +
                    '<input type="hidden" name="id" value="' + payload.id + '" />' +
                    '<input type="hidden" name="token" value="' + req.params.token + '" />' +
                    '<input type="password" name="password" value="" placeholder="Enter your new password..." />' +
                    '<input type="submit" value="Confirm Password" />' +
                    '</form>'
                );
            } catch (err) {
                if (err instanceof ExpiredToken) {
                    res.send('<p>Expired Link</p>');
                    console.log('Token Expired');
                }
                if (err instanceof InvalidAlgorithm) {
                    res.send('<p>Expired Link</p>');
                    console.log('Invalid Algorithm');
                }
                if (err instanceof InvalidToken) {
                    res.send('<p>Expired Link</p>');
                    console.log('Invalid Token');
                }
            }

        }
    });  
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
                            var client = {
                                _id: req.body.id,
                                password: req.body.password,
                            };
                            bcrypt.genSalt(10, function (err, salt) {
                                bcrypt.hash(client.password, salt, function (err, hash) {
                                    client.password = hash;
                                    if (err) throw err;
                                    Client.findByIdAndUpdate(req.body.id, { $set: client }, { new: true }, (err, doc) => {
                                        if (!err) { console.log("Pass Reset Completed"); }
                                        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
                                    });
                                });
                            });
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

    //var payload = jwt.decode(req.body.token, secret);

    // TODO: Gracefully handle decoding issues.
    // TODO: Hash password from
    // req.body.password

    res.send('Your password has been successfully changed.');
});

module.exports=router;

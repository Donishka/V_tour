const express = require('express');
var router =  express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt  = require('bcryptjs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var { Client }  = require('../../data/client/client.model.js');
var  ClientModel = require('../../data/client/client.model.js');
//var Hashing = require('../../functions/hashing.js');
const loginModel = require('../../data/login/login.model');

var transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com', port: 465, secure: true, // 
    service: 'Gmail', auth: {
        user: 'vtourofficial@gmail.com', pass: 'vtourpassword' },
    tls: { rejectUnauthorized: false }
}));

router.get('/', (req, res) => {
    Client.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Client :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Client.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Client :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/finished',(req,res)=>{
    var mailOptions = {
        from: 'vtourofficial@gmail.com',
        to: req.body.email,
        subject: 'V Tour',
        html: '<p>Your tour has been created, Please log into your account and check details. Do not hesitate to contact us if there is any changes to be made.</p>'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

router.post('/', (req, res) => {
    var emailcheck = req.body.email;
    loginModel.findByClientEmail(emailcheck, function (err, user) {
    if (err) throw err;
    if (!user) {
        var client = new Client({
            fname: req.body.fname,
            lname: req.body.lname,
            password: req.body.password,
            email: req.body.email,
            telephone: req.body.telephone,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            postalcode: req.body.postalcode,
            noofvisitors: req.body.noofvisitors,
            foodprefer: req.body.foodprefer,
            intactivities: req.body.intactivities,
            agegroup: req.body.agegroup,
            datefrom: req.body.datefrom,
            dateto: req.body.dateto,
            usertype: "client"
        });
        ClientModel.saveUser(client, (err, doc) => {
            if (err) {
                res.json({ state: false, msg: "data not inserted" });
            }
            if (doc) {
                res.json({ state: true, msg: "data  inserted" });
                var mailOptions = {
                    from: 'vtourofficial@gmail.com',
                    to: req.body.email,
                    subject: 'V Tour Account Credentials',
                    html: '<p>Please Use --- ' + req.body.password + ' --- as your login password and use link below to login</p>' + '<a href="http://localhost:4200/login">Click Here</a>'
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            }
        });
    }else{
        res.json({ state: false, msg: "User Already Exsits" });    
    }
    });
});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var client = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            telephone: req.body.telephone,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            postalcode: req.body.postalcode,
            noofvisitors: req.body.noofvisitors,
            foodprefer: req.body.foodprefer,
            intactivities: req.body.intactivities,
            agegroup: req.body.agegroup,
            datefrom: req.body.datefrom,
            dateto: req.body.dateto,
            usertype: "client"};
    Client.findByIdAndUpdate(req.params.id, { $set: client }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
            });
        });

router.put('/changepw/:id', (req, res) => {
    var client = {
        _id: req.body._id,
        password: req.body.password,
    };
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(client.password, salt, function (err, hash) {
            client.password = hash;
            if (err) throw err;
            Client.findByIdAndUpdate(req.params.id, { $set: client }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
            });
        });
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Client.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Client Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
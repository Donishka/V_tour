const express = require('express');
var router =  express.Router();
const bcrypt  = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;
const multer = require('multer');
const path = require('path');
const fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const travelAgentModel = require('../../data/travelAgent/travelagent.model');
const loginModel = require('../../data/login/login.model');

var { TravelAgent }  = require('../../data/travelAgent/travelagent.model.js');
var  TravelAgentModel  = require('../../data/travelAgent/travelagent.model.js');
var picture=null;
var transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com', port: 465, secure: true, // 
    service: 'Gmail', auth: {
        user: 'vtourofficial@gmail.com', pass: 'vtourpassword'
    },
    tls: { rejectUnauthorized: false }
}));
router.get('/', (req, res) => {
    TravelAgent.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Travel Agents :' + JSON.stringify(err, undefined, 2)); }
    });
    
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        TravelAgent.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Travel Agent :' + JSON.stringify(err, undefined, 2)); }
    });  
});

router.post('/', (req, res) => {
    var emailcheck=req.body.email;
    var usernamecheck=req.body.username;
    loginModel.findByTAgentEmail(emailcheck, function (err, user) {
        if (err) throw err;
        if (!user) {
            findByTAgentUserName(usernamecheck, function (err, username) {
                if (err) throw err;
                if (!username) {
                    var travelagent = new TravelAgent({
                        fname: req.body.fname,
                        lname: req.body.lname,
                        username: req.body.username,
                        agencyname: req.body.agencyname,
                        password: req.body.password,
                        email: req.body.email,
                        telephone: req.body.telephone,
                        address: req.body.address,
                        isadmin: req.body.isadmin,
                        profilepic: null,
                        usertype: "travelagent"
                    });
                    TravelAgentModel.saveUser(travelagent, (err, doc) => {
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
                    }
                    );
                } else {
                    res.json({ state: false, msg: "Username Already Exsits" });
                }
            });
        } else {
            res.json({ state: false, msg: "User Already Exsits" });
        }
    });
});

router.put('/changepw/:id', (req, res) => {
    
    var travelagent= {
        _id:req.body._id,
        password: req.body.password,
    };
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(travelagent.password, salt, function (err, hash) {
            travelagent.password = hash;
            if (err) throw err;
            TravelAgent.findByIdAndUpdate(req.params.id, { $set: travelagent }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
            });
        });
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var travelagent = {
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        isadmin: req.body.isadmin,
        usertype:"travelagent"
    };

    TravelAgent.findByIdAndUpdate(req.params.id, { $set: travelagent }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/profilepic/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    var travelagent = {
        profilepic: picture
    };

    TravelAgent.findByIdAndUpdate(req.params.id, { $set: travelagent }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    TravelAgent.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Travel Agent Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

const DIR = '../Frontend/src/assets';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage });

router.post('/api/upload', upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });
    } else {        
        picture=req.file.filename;
        console.log(picture);
        return res.send({
            success: true
        })
    }
});

/*
router.get('/:username', (req, res) => {
    findByTAgentUserName(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Travel Agent :' + JSON.stringify(err, undefined, 2)); }
    });
});
*/
findByTAgentUserName = function (username, callback) {
    const query = { username: username };
    travelAgentModel.TravelAgent.findOne(query, callback);
};


module.exports = router;
const express = require('express');
var router =  express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt  = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
//var Hashing = require('../../functions/hashing.js');
var { ServiceProvider }  = require('../../data/serviceProvider/serviceprovider.model.js');
var  ServiceProviderModel  = require('../../data/serviceProvider/serviceprovider.model.js');

const loginModel = require('../../data/login/login.model');


router.get('/', (req, res) => {
    ServiceProvider.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Service Provider :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        ServiceProvider.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Service Provider :' + JSON.stringify(err, undefined, 2)); res.send(false); }
    });
});

router.post('/', (req, res) => {
    var emailcheck = req.body.email;
    loginModel.findBySPEmail(emailcheck, function (err, user) {
        if (err) throw err;
        if (!user) {
            var serviceprovider = new ServiceProvider({
                fname: req.body.fname,
                username: req.body.username,
                password: req.body.password,
                email:req.body.email,
                telephone: req.body.telephone,
                address: req.body.address,
                type: req.body.type,
                discription:req.body.discription,
                profilepic:null,
                usertype:"serviceprovider"
            });
            ServiceProviderModel.saveUser(serviceprovider,(err, doc) => {
                if(err){
                    res.json({state:false,msg:"data not inserted"});
                }
                if(doc){
                    res.json({state:true,msg:"data  inserted"});
                }}
            );
        }else{
            res.json({ state: false, msg: "User Already Exsits" });
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var serviceprovider = {
        fname: req.body.fname,
        username: req.body.username,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        type: req.body.type,
        discription:req.body.discription,
        usertype:"serviceprovider"
    };


    ServiceProvider.findByIdAndUpdate(req.params.id, { $set: serviceprovider }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });

});

router.put('/changepw/:id', (req, res) => {
    var serviceprovider = {
        _id: req.body._id,
        password: req.body.password,
    };
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(serviceprovider.password, salt, function (err, hash) {
            serviceprovider.password = hash;
            if (err) throw err;
            ServiceProvider.findByIdAndUpdate(req.params.id, { $set: serviceprovider }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
            });
        });
    });
});

router.put('/profilepic/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    var serviceprovider = {
        profilepic: picture
    };

    ServiceProvider.findByIdAndUpdate(req.params.id, { $set: serviceprovider }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
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

        picture = req.file.filename;
        console.log(picture);
        return res.send({
            success: true
        })
    }
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ServiceProvider.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Service Provider Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
const express = require('express');
var router =  express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt  = require('bcryptjs');

var { Client }  = require('../../data/client/client.model.js');
var  ClientModel = require('../../data/client/client.model.js');
//var Hashing = require('../../functions/hashing.js');


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

router.post('/', (req, res) => {
    var client = new Client({
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        noofvisitors: req.body.noofvisitors,
        foodprefer:req.body.foodprefer,
        intactivities:req.body.intactivities,
        agegroup:req.body.agegroup,
    });
    ClientModel.saveUser(client,(err, doc) => {
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(doc){
            res.json({state:true,msg:"data  inserted"});
        }}
);
});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var client = {
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        noofvisitors: req.body.noofvisitors,
        foodprefer:req.body.foodprefer,
        intactivities:req.body.intactivities,
        agegroup:req.body.agegroup,
    };
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(client.password, salt, function(err, hash) {
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
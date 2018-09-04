const express = require('express');
var router =  express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Client } = require('../../data/client/client.model.js');


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
        telephone: req.body.telephone,
        address: req.body.address,
        noofvisitors: req.body.noofvisitors,
        foodprefer:req.body.foodprefer,
        intactivities:req.body.intactivities,
        agegroup:req.body.agegroup,
    });
    client.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Client Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var client = new Client({
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        password: req.body.password,
        telephone: req.body.telephone,
        address: req.body.address,
        noofvisitors: req.body.noofvisitors,
        foodprefer:req.body.foodprefer,
        intactivities:req.body.intactivities,
        agegroup:req.body.agegroup,
    });
        Client.findByIdAndUpdate(req.params.id, { $set: client }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Client Update :' + JSON.stringify(err, undefined, 2)); }
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
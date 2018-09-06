const express = require('express');
var router =  express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { ServiceProvider } = require('../../data/serviceProvider/serviceprovider.model.js');


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
        else { console.log('Error in Retriving Service Provider :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var serviceprovider = new ServiceProvider({
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        type: req.body.type,
        discription:req.body.discription,
    });
    serviceprovider.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Service Provider Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var serviceprovider = {
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        type: req.body.type,
        discription:req.body.discription,
    };
    ServiceProvider.findByIdAndUpdate(req.params.id, { $set: serviceprovider }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Service Provider Update :' + JSON.stringify(err, undefined, 2)); }
    });
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
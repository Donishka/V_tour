const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

var { ItenararyPayment } = require('../../data/itenararyPayment/itenararyPayment.model');
var ItenararyPaymentModel = require('../../data/itenararyPayment/itenararyPayment.model.js');

router.get('/', (req, res) => {
    ItenararyPayment.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Payments :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ItenararyPayment.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Payments :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var itenararypayment = new ItenararyPayment({
        clientid:req.body.clientid,
        clientname: req.body.clientname,
        itenararyid: req.body.itenararyid,
        itenararyname: req.body.itenararyname,
        tausername:req.body.tausername,
        amount: req.body.amount,
        date: req.body.date,
        status: "Waiting for Confirmation",
    });
itenararypayment.save(itenararypayment, (err, doc) => {
        if (err) {
            res.json({ state: false, msg: "data not inserted" });
        }
        if (doc) {
            console.log(req.params.clientname);
            res.json({ state: true, msg: "data  inserted" });
        }
    }
    );
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    ItenararyPayment.findByIdAndUpdate(req.params.id, {
        $set: {
            status: "Payment Recived",
        }
    }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/reject/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    ItenararyPayment.findByIdAndUpdate(req.params.id, {
        $set: {
            status: "Payment Rejected",
        }
    }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    ItenararyPayment.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Travel Agent Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
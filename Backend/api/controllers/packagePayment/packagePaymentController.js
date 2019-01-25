const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

var { PackagePayment } = require('../../data/packagePayment/packagePayment.model');
var PackagePaymentModel = require('../../data/packagePayment/packagePayment.model');

router.get('/', (req, res) => {
    PackagePayment.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Payments :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    PackagePayment.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Payments :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    var packagepayment = new PackagePayment({
        spid: req.body.spid,
        spname: req.body.spname,
        packageid: req.body.packageid,
        packagename: req.body.packagename,
        travelagentid: req.body.travelagentid,
        travelagentname: req.body.travelagentname,
        amount: req.body.amount,
        date: req.body.date,
        status: "Waiting for Confirmation",
    });
    packagepayment.save(packagepayment, (err, doc) => {
        if (err) {
            res.json({ state: false, msg: "data not inserted" });
        }
        if (doc) {
            res.json({ state: true, msg: "data  inserted" });
        }
    }
    );
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    PackagePayment.findByIdAndUpdate(req.params.id, {
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
    PackagePayment.findByIdAndUpdate(req.params.id, {
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

    PackagePayment.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Travel Agent Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
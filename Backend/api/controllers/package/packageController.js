const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const multer = require('multer');
const path = require('path');
const fs = require('fs');

var { Package } = require('../../data/package/package.model.js');
var PackageModel = require('../../data/package/package.model.js');
var image=null;

router.get('/', (req, res) => {
    Package.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Packages :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Package.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Package :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var package = new Package({
        name:req.body.name,
        availability:req.body.availability,
        type:req.body.type,
        discription:req.body.discription,
        price:req.body.price,
        picture: req.body.picture,
        spid:req.body.spid,
        spname:req.body.spname
    });
    package.save(package, (err, doc) => {
        if (err) {
            console.log(err);
            res.json({ state: false, msg: "data not inserted" });
        }
        if (doc) {
            console.log(doc);
            res.json({ state: true, msg: "data  inserted" });
        }
    }
    );
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Package.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            availability: req.body.availability,
            type: req.body.type,
            discription: req.body.discription,
            price: req.body.price,
            spid: req.body.spid,
            spname: req.body.spname
        }
    }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Package Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/profilepic/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    var package = {
        picture:image,
    };

    Package.findByIdAndUpdate(req.params.id, { $set: package }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Package.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Package Delete :' + JSON.stringify(err, undefined, 2)); }
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
        image = req.file.filename;
        return res.send({
            success: true
        })
    }
});


module.exports = router;
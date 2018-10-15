const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Itinerary } = require('../../data/itinerary/itineraty.model.js');
var ItineraryModel = require('../../data/itinerary/itineraty.model.js');

router.get('/', (req, res) => {
    Itinerary.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Itineraries :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Itinerary.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Package :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var itinerary = new Itinerary({
        events:req.body.events
    });
    itinerary.save(itinerary, (err, doc) => {
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

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Package.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Package Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
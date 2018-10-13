const express = require('express');
var router =  express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt  = require('bcryptjs');
//var Hashing = require('../../functions/hashing.js');
var { ServiceProvider }  = require('../../data/serviceProvider/serviceprovider.model.js');
var  ServiceProviderModel  = require('../../data/serviceProvider/serviceprovider.model.js');



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
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        type: req.body.type,
        discription:req.body.discription,
        profilepic:req.body.profilepic,
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
        profilepic:req.body.profilepic,
        usertype:"serviceprovider"
    };


    if (err) throw err;
    ServiceProvider.findByIdAndUpdate(req.params.id, {
        $set: {
            fname: req.body.fname,
            username: req.body.username,
            email: req.body.email,
            telephone: req.body.telephone,
            address: req.body.address,
            type: req.body.type,
            discription: req.body.discription,
            profilepic: req.body.profilepic,
            usertype: "serviceprovider"} }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
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
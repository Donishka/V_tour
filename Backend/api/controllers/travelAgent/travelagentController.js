const express = require('express');
var router =  express.Router();
const bcrypt  = require('bcryptjs');
var ObjectId = require('mongoose').Types.ObjectId;

var { TravelAgent }  = require('../../data/travelAgent/travelagent.model.js');
var  TravelAgentModel  = require('../../data/travelAgent/travelagent.model.js');

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
   var travelagent = new TravelAgent({
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        isadmin: req.body.isadmin,
        profilepic: req.body.profilepic,
        usertype:"travelagent"
    });
    TravelAgentModel.saveUser(travelagent,(err, doc) => {
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

    var travelagent = {
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        isadmin: req.body.isadmin,
        profilepic: req.body.profilepic,
        usertype:"travelagent"
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

module.exports = router;
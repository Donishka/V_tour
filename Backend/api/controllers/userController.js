const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt  = require('bcryptjs');
//var Hashing = require('../../functions/hashing.js');

var { User } = require('../data/users.model.js');
var  UserS = require('../data/users.model.js');

// => localhost:4201/users/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var user = new User({
        Fname: req.body.Fname,
        Lname:req.body.Lname,
        userID: req.body.userID,
        userName: req.body.userName,
        password: req.body.password,
        telephone: req.body.telephone,
    });
    UserS.saveUser(user,(err, doc) => {
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

    var user = {
      Fname: req.body.Fname,
      Lname:req.body.Lname,
      userID: req.body.userID,
      userName: req.body.userName,
      password: req.body.password,
      telephone: req.body.telephone,
    };
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;

            if (err) throw err;
            User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
            });
        });
    });

});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;

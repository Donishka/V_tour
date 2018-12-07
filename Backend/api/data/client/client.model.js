const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');
var Client =  mongoose.model('Client', {
    fname : {
        type:String,
        required:true
    }, 
    lname : {
        type:String,
    },
    username:{
        type:String
    },
    password : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    telephone : [String],
    address:{
        type:String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    postalcode: {
        type: String,
    },
    noofvisitors:{
        type:Number,
    },
    foodprefer : [String],
    intactivities : [String],
    agegroup:{
        type:String,
    },
    usertype : {
        type:String,
        required:true
    },
    datefrom :{
        type:String,
    },
    dateto : {
        type:String,
    }
},'clients');

module.exports = { Client };


module.exports.saveUser = function (newUser,callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;

            if (err) throw err;
            newUser.save(callback);
        });
    });
};
module.exports.updateUser = function (newUser,callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;

            if (err) throw err;
            newUser.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
            });
        });
    });
};

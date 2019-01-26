const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');
var TravelAgent =  mongoose.model('TravelAgent', {
    fname : {
        type:String,
        required:true
    }, 
    lname : {
        type:String,
        required:true
    },
    username:{
        type:String,
    },
    agencyname: {
        type: String,
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
    isadmin:{
        type:Boolean,
    },
    profilepic:{
        type:String,
    },
    usertype : {
        type:String,
        required:true
    },

},'travelagents');

module.exports = { TravelAgent };


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


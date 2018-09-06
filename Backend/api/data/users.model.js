const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');

var User =  mongoose.model('User', {
    Fname : String, 
    Lname : String,
    userID : {
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password : String,
    telephone : [String]

},'user');

module.exports = { User };


module.exports.saveUser = function (newUser,callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;

            if (err) throw err;
            newUser.save(callback);
        });
    });
};
module.exports.updateUser = function (id,newUser,callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;

            if (err) throw err;
            User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
            });
        });
    });
};

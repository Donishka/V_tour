const mongoose = require('mongoose');
var Package = mongoose.model('Package', {
    name: {
        type: String
    },
    availability: {
        type: String
    },
    type: {
        type: String
    },
    discription: {
        type: String,
    },
    price: {
        type: Number,
    },
    picture:{
        type:String,
    },
    spid: {
        type: String,
    },
    spname: {
        type: String
    },

}, 'packages');

module.exports = { Package };

module.exports.saveUser = function (newUser, callback) {

            newUser.save(callback);
 
};
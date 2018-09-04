const mongoose = require('mongoose');
var ServiceProvider =  mongoose.model('SreviceProvider', {
    fname : {
        type:String,
        required:true
    }, 
    lname : {
        type:String,
    },
    username:{
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    telephone : [String],
    address:{
        type:String,
    },
    type:{
        type:String,
    },
    discription:{
        type:String,
    },

},'serviceproviders');

module.exports = { ServiceProvider };
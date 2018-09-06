const mongoose = require('mongoose');
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
    isadmin:{
        type:Boolean,
    },

},'travelagents');

module.exports = { TravelAgent };
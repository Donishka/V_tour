const mongoose = require('mongoose');

var Client =  mongoose.model('Client', {
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
    noofvisitors:{
        type:Number,
    },
    foodprefer : [String],
    intactivities : [String],
    agegroup:{
        type:String,
    },
},'clients');

module.exports = { Client };
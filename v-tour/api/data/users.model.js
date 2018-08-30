const mongoose = require('mongoose');

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
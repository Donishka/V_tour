var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
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

});

mongoose.model('User',userSchema,'user');
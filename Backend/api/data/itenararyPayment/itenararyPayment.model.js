const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var ItenararyPayment = mongoose.model('ItenararyPayment', {
    clientid: {
        type: String,
    },
    clientname: {
        type: String,
    },
    itenararyid: {
        type: String,
    },
    itenararyname: {
        type: String,
    },
    tausername:{
        type:String,
    },
    amount: {
        type: String,
    },
    date: {
        type: String,
    },
    status:{
        type: String,
    }

}, 'itenararypayment');

module.exports = { ItenararyPayment };



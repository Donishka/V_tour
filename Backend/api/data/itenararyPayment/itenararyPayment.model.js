const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var ItenararyPayment = mongoose.model('ItenararyPayment', {
    clientid: {
        type: String,
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



const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var PackagePayment = mongoose.model('PackagePayment', {
    spid: {
        type: String,
    },
    spname: {
        type: String,
    },
    packageid: {
        type: String,
    },
    packagename: {
        type: String,
    },
    travelagentid: {
        type: String,
    },
    travelagentname: {
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

}, 'packagepayment');

module.exports = { PackagePayment };



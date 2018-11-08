const mongoose = require('mongoose');
var Event = mongoose.model('Event', {
    
    id: {
        type: Number
    },
    price: {
        type: Number
    },
    name: {
        type: String
    },
    venue: {
        type: String,
    }
}, 'event');

module.exports = { Event };
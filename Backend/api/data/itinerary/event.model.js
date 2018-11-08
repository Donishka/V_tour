const mongoose = require('mongoose');
var Event = mongoose.model('Event', {
    
    id: {
        type: Number
    },
    cost: {
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
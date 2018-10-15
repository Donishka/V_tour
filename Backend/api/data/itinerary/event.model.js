const mongoose = require('mongoose');
var Event = mongoose.model('Event', {
    
    id: {
        type: Number
    },
    position: {
        type: String
    },
    name: {
        type: String
    },
    venue: {
        type: String,
    }
}, 'events');

module.exports = { Event };
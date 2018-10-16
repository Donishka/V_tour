const mongoose = require('mongoose');
Event  = require('./event.model');

EventSchema = mongoose.model('Event').schema;
var Itinerary = mongoose.model('Itinerary', {
    traveAgentName:String,
    events:[EventSchema]
}, 'itineraries');

module.exports = { Itinerary };


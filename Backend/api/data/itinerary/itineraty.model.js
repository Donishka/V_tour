const mongoose = require('mongoose');
Event  = require('./event.model');

EventSchema = mongoose.model('Event').schema;
var Itinerary = mongoose.model('Itinerary', {
    date_time:String,
    name:String,
    note:String,
    traveAgentName:String,
    events:[EventSchema],
    clientId:String,
    totalPrice: Number
}, 'itineraries');

module.exports = { Itinerary };


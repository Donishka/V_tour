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
    },

    date_from: { type: String },

    date_to: { type: String },

    description: {
        type: String
    },

    sp_id: { type: String },

    pkg_id: { type: String },

    cost: { type: String },
    check_in_time: { type: String }, // for loading purpose
    duration: { type: String }, // for hotel
    category: { type: String }, // for travel purpose
    depature_time: { type: String }, // When travel by train
    event_type: { type: String }, // for editing purpose
    travel_category: { type: String }



}, 'event');

module.exports = { Event };
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ShowIsSchema = new Schema({
    showID: {
        type: String,
        required: true
    },

    showName: {
        type: String,
        required: true
    },

    showLocation: {
        type: String,
        required: true
    },

    showDate: {
        type: String,
        required: true
    },
});

mongoose.model('showID',
    ShowIsSchema);
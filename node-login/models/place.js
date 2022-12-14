const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Created a place Schema for each of the Places
const placeSchema = new Schema({
    title: { type: String, required: true}, 
    description: {type: String, required: true}, 
    creator: {type: String, required: true}
});

module.exports = mongoose.model('Place', placeSchema);
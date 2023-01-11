const mongoose = require('mongoose');

//This imports the unique validator, which helps create unique emails for this projet
const uniqueValidator = require('mongoose-unique-validator');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true}, 
    email: {type: String, required: true, unique: true}, //Need to add unique in order to use the third-party unique validator
    password: {type: String, required: true},
    image: {type: String, required: true},
    places: {type: String, required: true}

});

//This adds the email validator to the schema
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
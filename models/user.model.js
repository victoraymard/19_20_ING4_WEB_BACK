const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
const userSchema = new Schema({
    _id: ObjectId,
    location: String,
    personsInHouse: Number,
    houseSize: String
});


module.exports = mongoose.model('user', userSchema, 'user');

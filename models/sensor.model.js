const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
const sensorSchema = new Schema({
    _id: ObjectId,
    creationDate: Date,
    location: String,
    userID: ObjectId
});

module.exports = mongoose.model('sensor', sensorSchema, 'sensor');

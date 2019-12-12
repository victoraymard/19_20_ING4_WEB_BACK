const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// create a schema
const measureSchema = new Schema({
    _id: ObjectId,
    type: String,
    creationDate: Date,
    sensorID: ObjectId,
    value: Number
});

module.exports = mongoose.model('measure', measureSchema, 'measure');

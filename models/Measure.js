const mongoose = require ('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const measure = new mongoose.Schema({
    //_id:ObjectId,
    type: String,
    creationDate: Date,
    sensorID: ObjectId,
    value: Number
});

module.exports = Measure = mongoose.model('measure', measure, 'measure');
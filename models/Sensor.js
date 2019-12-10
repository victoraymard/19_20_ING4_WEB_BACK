const mongoose = require ('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const sensor = new mongoose.Schema({
    creationDate: Date,
    location: String,
    userID: ObjectId
});

module.exports = Sensor = mongoose.model('sensor', sensor, 'sensor');
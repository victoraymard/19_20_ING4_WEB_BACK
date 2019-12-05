const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
    },
    {
        location: String
    },
    {
        personsInHouse: 1
    },
    {
        houseSize: String
    }
);

module.exports = mongoose.model('User', userSchema);

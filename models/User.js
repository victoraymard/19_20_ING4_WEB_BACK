const mongoose = require ('mongoose');

const user = new mongoose.Schema({
    location:{
        type:String,
       // required:[true, 'Location field is required']
    },
    personsInHouse:{
        type:Number,
        //default:1
    },
    houseSize:{
        type:String,
        default: "medium"
    }
});

module.exports = User = mongoose.model('user', user, 'user');
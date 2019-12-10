const express = require ('express');
const mongoose = require ('mongoose');
const Sensor = require('../models/Sensor');
const route = express.Router();






// add a new sensor
route.put("/",(req,res)=>{
    const newSensor = new Sensor({
        //_id: req.body.value,
        creationDate: req.body.creationDate,
        location: req.body.location,
        userID: req.body.userID
    });

    newSensor
        .save()
        .then(result => {
            //res.json(result);
            console.log(result);
            res.end();
        })
        .catch(err => {
            //res.json({message : err});
            console.log(err);
        });
});

// get all sensors
route.get('/',function (req,res,next) {
    //res.send({type:'GET'});
    Sensor.find({}).then(function (sensor) {
        console.log("doing the get on all the sensors");
        res.send(sensor);
        console.log("get done");
    });
});


// get one sensor by id
route.get('/:sensorID', function (req,res,next) {
    Sensor.findById(req.params.sensorID).then(function (sensor) {
        console.log("doing the get on one sensor");
        res.send(sensor);
        console.log("get done");
    });
});

// delete a user in the db
route.delete('/:id', function (req,res,next) {
    Sensor.findByIdAndRemove(req.params.id).then(function (sensor) {
        console.log("doing the delete on one sensor");
        res.send(sensor);
    });
});

// update a sensor
// post is not working
route.post("/:sensorID",function (req,res, next){
    // creation of an new object
    const newSensor = new Sensor({ });

    // get the data of the existing element
    Sensor.findById(req.params.sensorID).then(function (sensor) {
        console.log("doing the post on one sensor");
        // init withe the existing values


        newSensor.creationDate = sensor.creationDate;
        newSensor.location = sensor.location;
        newSensor.userID = sensor.userID;

        // we modify the value(s) of the sensor
        if(req.body.creationDate)newSensor.creationDate= req.body.creationDate;
        if(req.body.type) newSensor.location = req.body.location;
        if(req.body.sensorID) newSensor.userID= req.body.userID;

        //res.send(newSensor);
        console.log("values changed done");
    });

    newSensor
        .save()
        .then(result => {
            //res.json(result);
            console.log(result);
            res.end();
        })
        .catch(err => {
            //res.json({message : err});
            console.log(err);
        });
});


module.exports = route;
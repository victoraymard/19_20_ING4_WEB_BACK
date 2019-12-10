const express = require ('express');
const mongoose = require ('mongoose');
const User = require('../models/User');
const route = express.Router();




// add a new sensor
route.put("/",(req,res)=>{
    const newUser = new User({
        //_id: req.body.value,
        location: req.body.location,
        personsInHouse: req.body.personsInHouse,
        houseSize: req.body.houseSize
    });

    newUser
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


// get all users
route.get('/',function (req,res,next) {
    //res.send({type:'GET'});
    User.find({}).then(function (user) {
        console.log("doing the get on all the users");
        res.send(user);
        console.log("get done");
    });
});


// get one sensor by id
route.get('/:userID', function (req,res,next) {
    User.findById(req.params.userID).then(function (user) {
        console.log("doing the get on one user");
        console.log(user);
        res.send(user);
        console.log("get done");
    });
});

// delete a user in the db
route.delete('/:id', function (req,res,next) {
    User.findByIdAndRemove(req.params.id).then(function (user) {
        console.log("doing the delete on one user");
        res.send(user);
    });
});

// update a sensor
// post is not working
route.post("/:userID",function (req,res, next){
    // creation of an new object
    const newUser = new User({ });

    // get the data of the existing element
    User.findById(req.params.userID).then(function (user) {
        console.log("doing the post on one user");
        // init withe the existing values


        newSensor.location = sensor.location;
        newSensor.personsInHouse = sensor.personsInHouse;
        newSensor.houseSize = sensor.houseSize;

        // we modify the value(s) of the sensor
        if(req.body.location) newUser.location= req.body.location;
        if(req.body.personsInHouse) newUser.personsInHouse = req.body.personsInHouse;
        if(req.body.houseSize) newUser.userID= req.body.houseSize;

        //res.send(newUser);
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
const express = require ('express');
const mongoose = require ('mongoose');
const Measure = require('../models/Measure');
const route = express.Router();



// add a new measure
route.put("/",(req,res)=>{
    const newMeasure = new Measure({
        //_id: req.body.value,
        type: req.body.type,
        creationDate: req.body.creationDate,
        sensorID: req.body.sensorID,
        value: req.body.value
    });

    newMeasure
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

// get all measures
route.get('/',function (req,res,next) {
    //res.send({type:'GET'});
    Measure.find({}).then(function (measure) {
        console.log("doing the get on all the measures");
        res.send(measure);
        console.log("get done");
    });
});

// get one measure by id
route.get('/:measureId', function (req,res,next) {
    Measure.findById(req.params.measureId).then(function (measure) {
        console.log("doing the get on one measure");
        res.send(measure);
        console.log("get done");
    });
});

// delete a user in the db
route.delete('/:id', function (req,res,next) {
    Measure.findByIdAndRemove(req.params.id).then(function (measure) {
        console.log("doing the delete on one measure");
        res.send(measure);
    });
});

// update a measure
// post is not working
route.post("/:measureId",function (req,res, next){
    // creation of an new object
    const newMeasure = new Measure({ });

    // get the data of the existing element
    Measure.findById(req.params.measureId).then(function (measure) {
        console.log("doing the post on one measure");
        // init withe the existing values

            newMeasure.type = measure.type;
            newMeasure.creationDate = measure.creationDate;
            newMeasure.sensorID = measure.sensorID;
            newMeasure.value = measure.value;

        // we modify the value(s) of the measure
        if(req.body.type) newMeasure.type = req.body.type;
        if(req.body.creationDate)newMeasure.creationDate= req.body.creationDate;
        if(req.body.sensorID) newMeasure.sensorID= req.body.sensorID;
        if(req.body.value) newMeasure.value= req.body.value;

        //res.send(newMeasure);
        console.log("values changed done");
    });

    newMeasure
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

/* ---------------------------------- test ----------------------------------------------------*/
/*route.post('/', async(req,res,next)=>{
    const{_id, _type, _creationDate, _sensorID, _value} = req.body;
    let measure = {};
    measure._id = _id;
    measure._type = _type;
    measure._creationDate = _creationDate;
    measure._sensorID = _sensorID;
    measure._value = _value;
    let newMeasure = new Measure (measure);
    await newMeasure.save();
    console.log("done");
    res.json(newMeasure);
});*/
/*
route.post("/",(req,res)=>{
    const newMeasure = new Measure({
        //_id: req.body.value,
        type: req.body.type,
        creationDate: req.body.creationDate,
        sensorID: req.body.sensorID,
        value: req.body.value
    });

    newMeasure
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
});*/




/*route.post("/:measureID", function (req,res,next){
    // Validate request
    //if (!req.body._id) {
        // If firstName is not present in body reject the request by
        // sending the appropriate http code
        //return res.status(400).send({
        //    message: 'Id can not be empty'
      //  });
    //}

    // Create a new User
    const measure = new Measure({
        _id: req.body._id,
        type: req.body.type,
        creationDate: req.body.creationDate,
        sensorID: req.body.sensorID,
        value: req.body.value
    });

    // Save User in the database
    measure
        .save()
        .then(data => {
            // we wait for insertion to be complete and we send the newly user integrated
            res.send(data);
        })
        .catch(err => {
            // In case of error during insertion of a new user in database we send an
            // appropriate message
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the measure.'
            });
        });
});*/
/* ---------------------------------- test ----------------------------------------------------*/
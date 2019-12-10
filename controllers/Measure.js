const Measure = require('../models/Measure');

// retourne tout les measures de la dtb
exports.findAll = (req, res) => {
    Measure.find()
        .then(measures => {
            res.send(measures);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving measures.'
            });
        });
};

// retourne le measure dont l'id correspond
exports.findOne = (req, res) => {
    Measure.findById(req.params.measureId)
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            res.send(measure);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'Error retrieving measure with id ' + req.params.measureId
            });
        });
};

// Create and Save a new measure
exports.create = (req, res) => {
    // Validate request
    if (!req.body._id) {
        // If firstName is not present in body reject the request by
        // sending the appropriate http code
        return res.status(400).send({
            message: 'Id can not be empty'
        });
    }

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
};

// Delete a measure with the specified measureId in the request
exports.delete = (req, res) => {
    Measure.findByIdAndRemove(req.params.measureId)
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            res.send({ message: 'Measure deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'Could not delete measure with id ' + req.params.measureId
            });
        });
};

// Update a measure identified by the measureId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.type) {
        return res.status(400).send({
            message: 'Type can not be empty'
        });
    }

    // Find measure and update it with the request body
    Measure.findByIdAndUpdate(
        req.params.measureId,
        {
            type: req.body.type,
        },
        { new: true }
    )
        .then(measure => {
            if (!measure) {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            res.send(measure);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Measure not found with id ' + req.params.measureId
                });
            }
            return res.status(500).send({
                message: 'Error updating measure with id ' + req.params.measureId
            });
        });
};

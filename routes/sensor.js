var express = require('express');
var router = express.Router();
// we import our user controller
var sensor = require('../controllers/sensor.controller');

/* GET one sensor */
router.get('/:sensorId', sensor.findOne);

/* create  one sensor */
router.put('/', sensor.create);

/* DELETE  one sensor by id */
router.delete('/:sensorId', sensor.delete);

/* update  one sensor */
router.post('/:sensorId', sensor.update);

module.exports = router;


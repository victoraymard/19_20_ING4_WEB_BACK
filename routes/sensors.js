var express = require('express');
var router = express.Router();
var sensor = require('../controllers/sensor.controller');

/* GET sensors listing. */
router.get('/', sensor.findAll);

module.exports = router;

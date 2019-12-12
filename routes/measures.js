var express = require('express');
var router = express.Router();
var measure = require('../controllers/measure.controller');

/* GET users listing. */
router.get('/', measure.findAll);

module.exports = router;


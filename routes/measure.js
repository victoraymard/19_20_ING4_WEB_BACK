var express = require('express');
var router = express.Router();
// we import our user controller
var measure = require('../controllers/measure.controller');

/* GET one measure */
router.get('/:measureId', measure.findOne);

/* create  one measure */
router.put('/', measure.create);

/* DELETE  one measure */
router.delete('/:measureId', measure.delete);

/* update  one measure */
router.post('/:measureId', measure.update);

module.exports = router;


var express = require('express');
var router = express.Router();
// we import our user controller
var user = require('../controllers/user.controller');

/* GET one user */
router.get('/:userId', user.findOne);

module.exports = router;

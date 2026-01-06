const router = require('express').Router();
const controller = require('../controllers/cti.command.controller');

router.post('/dial', controller.dial);

module.exports = router;

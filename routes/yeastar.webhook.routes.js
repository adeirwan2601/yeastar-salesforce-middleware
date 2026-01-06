const router = require('express').Router();
const controller = require('../controllers/yeastar.webhook.controller');

router.post('/call', controller.handleCallEvent);

module.exports = router;

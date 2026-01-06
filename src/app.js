const express = require('express');
const app = express();

app.use(express.json());

app.use('/webhook/yeastar', require('./routes/yeastar.webhook.routes'));
app.use('/api/cti', require('./routes/cti.command.routes'));

module.exports = app;

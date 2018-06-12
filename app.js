const express = require('express');
const app = express();
const db = require('./config/db');

// app.js
const ApiController = require('./api/ApiController');
app.use('/api/', ApiController);

module.exports = app;
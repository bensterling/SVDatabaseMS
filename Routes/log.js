'use strict';

const express = require('express');
const log = express.Router();

log.post('/postLog', async(req, res) => {
    //Request:
    //RaceId, Log(value, sensorId, UTC)

    //Response:
    //Confirmation or error
});

module.exports = log;
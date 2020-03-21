'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const log = express.Router();

log.post('/postLog', async (req, res) => {
    //Request:
    //RaceId, Log(value, sensorId, UTC)
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = log;
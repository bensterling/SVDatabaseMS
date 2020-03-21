'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const race = express.Router();

race.get('/getRaceCSV', async(req, res) => {
    //Request:
    //RaceId

    //Response:
    //CSV file containing all the logs for the race
});

race.put('/putEndDate', async(req, res) => {
    //Request:
    //RaceId

    //Response:
    //Confirmation or error
});

race.post('/postRace', async(req, res) => {
    //Request:
    //VehicleId, Race(startDate)

    //Response:
    //Confirmation or error
});

module.exports = race;
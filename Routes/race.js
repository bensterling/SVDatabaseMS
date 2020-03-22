'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const race = express.Router();

race.get('/getLogs', async (req, res) => {
    //Request:
    //raceId, vehicleId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //CSV file containing all the logs for the race
});

race.get('/getRaceCSV', async (req, res) => {
    //Request:
    //raceId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //CSV file containing all the logs for the race
});

race.put('/putEndDate', async (req, res) => {
    //Request:
    //raceId
    database.proc()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

race.post('/postRace', async (req, res) => {
    //Request:
    //VehicleId, Race(startDate)
    database.proc()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = race;
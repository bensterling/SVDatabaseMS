'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const vehicle = express.Router();

vehicle.get('/getAllVehicles', async (req, res) => {
    //Request:
    //teamId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //List of all vehicles for the given team
});

vehicle.post('/postVehicle', async (req, res) => {
    //Request:
    //TeamId, Vehicle(Name, SeasonDriven)
    database.proc()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = vehicle;
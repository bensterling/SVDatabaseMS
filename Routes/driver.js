'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const driver = express.Router();

driver.get('/getDrivers', async (req, res) => {
    //Request: 
    //teamId
    database.func() //This is how you call a stored procedure
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Drivers for the specified team
});

driver.post('/assignDriverToVehicle', async (req, res) => {
    //Request:
    //driverId, vehicleId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

driver.post('/postDriver', async (req, res) => {
    //Request:
    //teamId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = driver;

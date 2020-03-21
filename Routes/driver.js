'use strict';

const express = require('express');
const driver = express.Router();

driver.get('/getDrivers', async(req, res) => {
    //Request: 
    //teamId

    //Response:
    //Drivers for the specified team
});

driver.put('/assignDriverToVehicle', async(req, res) => {
    //Request:
    //driverId, vehicleId

    //Response:
    //Confirmation or error
});

driver.post('/postDriver', async(req, res) => {
    //Request:
    //teamId

    //Response:
    //Confirmation or error
});

module.exports = driver;

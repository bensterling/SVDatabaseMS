'use strict';

const express = require('express');
const vehicle = express.Router();

vehicle.get('/getAllVehicles', async(req, res) => {
    //Request:
    //teamId

    //Response:
    //List of all vehicles for the given team
});

vehicle.post('/postVehicle', async(req, res) => {
    //Request:
    //Vehicle(Name, SeasonDriven)

    //Response:
    //Confirmation or error
});

module.exports = vehicle;
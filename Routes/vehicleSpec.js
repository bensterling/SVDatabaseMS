'use strict';

const express = require('express');
const vehicleSpec = express.Router();

vehicleSpec.get('/getVehicleSpec', async(req, res) => {
    //Request:
    //vehicleId

    //Response:
    //Vehicle Spec in JSON format
});

vehicleSpec.post('/postVehicleSpec', async(req, res) => {
    //Request:
    //VehicleSpec(...)

    //Response:
    //Confirmation or error
});

module.exports = vehicleSpec;
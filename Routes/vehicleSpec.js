'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const vehicleSpec = express.Router();

vehicleSpec.get('/getVehicleSpec', async (req, res) => {
    //Request:
    //vehicleId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Vehicle Spec in JSON format
});

vehicleSpec.post('/postVehicleSpec', async (req, res) => {
    //Request:
    //VehicleSpec(...)
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = vehicleSpec;
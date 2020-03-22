'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const vehicleSpec = express.Router();

vehicleSpec.get('/getVehicleSpec', async (req, res) => {
    console.log(req.body)
    database.func('getVehicleSpec', req.body.vehicleId)
        .then(data => {
            res.status(200).json(data[0]);
        })
        .catch(error => {
            res.status(500).end();
        });
});

vehicleSpec.post('/postVehicleSpec', async (req, res) => {
    //Request:
    //VehicleSpec(...)
    database.func('postVehicleSpec', req.body.vehicleId) //Replace 1 with the req body vehicle ID
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = vehicleSpec;
'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const vehicleSpec = express.Router();

vehicleSpec.get('/getVehicleSpec', async (req, res) => {
    //Execute the stored function
    database.func('getVehicleSpec', [req.body.teamId, req.body.vehicleId]) //teamId will be in the token
        .then(data => {
            console.log(data)
            res.status(200).json(data[0]).end();
        })
        .catch(error => {
            res.status(500).send('Error!').end();
        });
});

vehicleSpec.post('/postVehicleSpec', async (req, res) => {
    //Execute the stored procedure
    database.proc('postVehicleSpec',
        [
            req.body.vehicleId,
            req.body.engine,
            req.body.frame,
            req.body.weight,
            req.body.cgHeight,
            req.body.diff,
            req.body.wheelbase,
            req.body.tires,
            req.body.dampers,
            req.body.ecu,
            req.body.daq,
            req.body.teamId, //teamId will be in the token
        ]
    )
        .then(data => {
            console.log(data)
            res.status(200).send('Success!').end();
        })
        .catch(error => {
            res.status(500).send('Error!').end();
        });
});

module.exports = vehicleSpec;
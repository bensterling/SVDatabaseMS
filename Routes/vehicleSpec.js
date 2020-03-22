'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const vehicleSpec = express.Router();

vehicleSpec.get('/getVehicleSpec', async (req, res) => {
    database.func('getVehicleSpec', req.body.vehicleId)
        .then(data => {
            res.status(200).json(data[0]);
        })
        .catch(error => {
            res.status(500).send('Error!').end();
        });
});

vehicleSpec.post('/postVehicleSpec', async (req, res) => {
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
            req.body.daq
        ]
    )
        .then(data => {
            res.status(200).send('Success!');
        })
        .catch(error => {
            res.status(500).send('Error!');
        });
});

module.exports = vehicleSpec;
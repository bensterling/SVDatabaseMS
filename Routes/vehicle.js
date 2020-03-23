'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const vehicle = express.Router();

vehicle.get('/getAllVehicles', async (req, res) => {
    //Execute the stored function
    database.func('getAllVehicles', req.body.teamId) //teamId will be in the token
        .then(data => {
            res.status(200).json(data[0].getAllVehicles).end();
        })
        .catch(error => {
            res.status(500).send('Error!').end();
        });
});

vehicle.post('/postVehicle', async (req, res) => {
    //Execute the stored procedure
    database.proc('postVehicle', [req.body.teamId, req.body.name, req.body.seasonsDriven]) //teamId will be in the token
        .then(data => {
            console.log(data)
            res.status(200).send('Success!').end();
        })
        .catch(error => {
            console.log(error)
            res.status(500).send('Error!').end();
        });
});

module.exports = vehicle;
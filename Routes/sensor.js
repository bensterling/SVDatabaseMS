'use strict';

const express = require('express');
const sensor = express.Router();

sensor.get('/getAllSensors', async(req, res) => {
    //Request:
    //VehicleId

    //Response:
    //List of all sensors for the given vehicle
});

sensor.put('/putSensorOutputUnit', async(req, res) => {
    //Request:
    //SensorId

    //Response:
    //Confirmation or error
});

sensor.post('/postSensor', async(req, res) => {
    //Request:
    //VehicleId, Sensor(name, outputUnit)

    //Response:
    //Confirmation or error
});

module.exports = sensor;
"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const sensor = express.Router();

sensor.get("/getSensors", async (req, res) => {
    //Request:
    //VehicleId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //List of all sensors for the given vehicle
});

sensor.put("/putSensorOutputUnit", async (req, res) => {
    //Request:
    //SensorId
    database.proc()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

sensor.post("/postSensor", async (req, res) => {
    //Request:
    //VehicleId, Sensor(name, outputUnit)
    database.proc()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = sensor;
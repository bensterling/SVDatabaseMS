"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const sensor = express.Router();

sensor.get("/getSensors", async (req, res) => {
  //Request:
  //VehicleId
  database
    .func()
    .then(data => {})
    .catch(error => {});
  //Response:
  //List of all sensors for the given vehicle
});

sensor.put("/putSensorOutputUnit", async (req, res) => {
  //Request:
  //SensorId
  database
    .proc()
    .then(data => {})
    .catch(error => {});
  //Response:
  //Confirmation or error
});

sensor.post("/postSensor", async (req, res) => {
  //Request:
  //VehicleId, Sensor(name, outputUnit)
  database
    .proc("postSensor", [
      req.body.vehicleId,
      req.body.name,
      req.body.outputUnit,
      req.body.category,
      req.body.teamId
    ])
    .then(data => {
      res
        .status(200)
        .send("Success!")
        .end();
    })
    .catch(error => {
      res
        .status(500)
        .send("Error!")
        .end();
    });
  //Response:
  //Confirmation or error
});

module.exports = sensor;

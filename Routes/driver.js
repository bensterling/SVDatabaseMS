"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const driver = express.Router();

driver.get("/getAllDrivers", async (req, res) => {
  //Request:
  //teamId
  database
    .func("getAllDrivers") //This is how you call a stored procedure
    .then(data => {
      res
        .status(200)
        .json(data[0])
        .end();
    })
    .catch(error => {
      res
        .status(500)
        .send("Error!")
        .end();
    });
  //Response:
  //Drivers for the specified team
});

driver.post("/assignDriverToVehicle", async (req, res) => {
  //Request:
  //driverId, vehicleId
  database
    .proc()
    .then(data => {})
    .catch(error => {});
  //Response:
  //Confirmation or error
});

driver.post("/postDriver", async (req, res) => {
  //Request:
  //teamId
  database
    .proc()
    .then(data => {})
    .catch(error => {});
  //Response:
  //Confirmation or error
});

module.exports = driver;

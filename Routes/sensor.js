"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const Joi = require("@hapi/joi");
const apiKeySchema = require("../Middleware/sanitizeAuth");
const sanitizeInputs = require("./helperFunctions");
const sensor = express.Router();

sensor.get("/getSensors", withAnyAuth, async (req, res) => {
  //Validate the request
  // TODO: Uncomment and test once get sensors is implemented.
  // const result = await sanitizeInputs(req, res, apiKeySchema);
  // if (result < 0) {
  //   console.error("Error: API key did not meet input requirements.");
  //   return;
  // }
  //Request:
  //VehicleId
  database
    .func()
    .then(data => {})
    .catch(error => {});
  //Response:
  //List of all sensors for the given vehicle
});

const putSensorOutputUnitSchema = Joi.object({
  sensorId: Joi.number()
    .integer()
    .required(),
  vehicleId: Joi.number()
    .integer()
    .required(),
  outputUnit: Joi.string()
    .alphanum()
    .required()
});

sensor.put("/putSensorOutputUnit", withAdminAuth, async (req, res) => {
  //Validate the request
  const result = await sanitizeInputs(
    req,
    res,
    apiKeySchema,
    putSensorOutputUnitSchema
  );

  if (result < 0) {
    if (result === -1) {
      console.error("Error: API key did not meet input requirements.");
    } else {
      console.error(
        "Error: One of inputs in body did not meet input requirements."
      );
    }
    return;
  }
  //Execute the stored procedure
  database
    .proc("putSensorOutputUnit", [
      req.user.APIKey,
      req.body.sensorId,
      req.body.vehicleId,
      req.body.outputUnit
    ])
    .then(data => {
      res
        .status(200)
        .send("Success!")
        .end();
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .send("Error!")
        .end();
    });
});

const postSensorSchema = Joi.object({
  vehicleId: Joi.number()
    .integer()
    .required(),
  name: Joi.string().required(),
  outputUnit: Joi.string()
    .alphanum()
    .required(),
  category: Joi.string()
    .alphanum()
    .required(),
  lowerBound: Joi.number()
    .integer()
    .required(),
  upperBound: Joi.number()
    .integer()
    .required()
});

sensor.post("/postSensor", withAdminAuth, async (req, res) => {
  //Validate the request
  const result = await sanitizeInputs(req, res, apiKeySchema, postSensorSchema);

  if (result < 0) {
    if (result === -1) {
      console.error("Error: API key did not meet input requirements.");
    } else {
      console.error(
        "Error: One of inputs in body did not meet input requirements."
      );
    }
    return;
  }

  //Execute the stored procedure
  database
    .proc("postSensor", [
      req.user.APIKey,
      req.body.vehicleId,
      req.body.name,
      req.body.outputUnit,
      req.body.category,
      req.body.lowerBound,
      req.body.upperBound
    ])
    .then(data => {
      res
        .status(200)
        .send("Success!")
        .end();
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .send("Error!")
        .end();
    });
});

module.exports = sensor;

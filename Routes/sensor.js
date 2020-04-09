"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const sensor = express.Router();

sensor.get("/getSensors", withAnyAuth, async (req, res) => {
	//Validate the request

	//Request:
	//VehicleId
	database
		.func()
		.then(data => { })
		.catch(error => { });
	//Response:
	//List of all sensors for the given vehicle
});

sensor.put("/putSensorOutputUnit", withAdminAuth, async (req, res) => {
	//Validate the request

	//Execute the stored procedure
	database.proc("putSensorOutputUnit",
		[
			req.user.APIKey,
			req.body.sensorId,
			req.body.vehicleId,
			req.body.outputUnit
		])
		.then(data => {
			res.status(200).send("Success!").end();
		})
		.catch(error => {
			res.status(500).send("Error!").end();
		});
});

sensor.post("/postSensor", withAdminAuth, async (req, res) => {
	//Validate the request

	//Execute the stored procedure
	database.proc("postSensor",
		[
			req.user.APIKey,
			req.body.vehicleId,
			req.body.name,
			req.body.outputUnit,
			req.body.category,
			req.body.lowerBound,
			req.body.upperBound
		])
		.then(data => {
			res.status(200).send("Success!").end();
		})
		.catch(error => {
			res.status(500).send("Error!").end();
		});
});

module.exports = sensor;

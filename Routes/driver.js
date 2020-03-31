"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const driver = express.Router();

driver.get("/getDrivers", withAnyAuth, async (req, res) => {
    //Validate the request

    //Execute the stored function
    database.func("getDrivers", req.user.APIKey)
        .then(data => {
            res.status(200).json(data[0].getDrivers).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

driver.post("/assignDriverToVehicle", withAdminAuth, async (req, res) => {
    //Validate the request

    //Execute the stored procedure
    database.proc("assignDriverToVehicle",
        [
            req.user.APIKey, 
            req.body.driverId,
            req.body.vehicleId
        ])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

driver.post("/postDriver", withAdminAuth, async (req, res) => {
    //Validate the request

    //Execute the stored procedure
    database.proc("postDriver",
        [
            req.user.APIKey,
            req.body.firstName,
            req.body.lastName,
            req.body.yearsOfExperience,
            req.body.age,
            req.body.height,
            req.body.weight
        ])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

module.exports = driver;

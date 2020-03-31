"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const vehicle = express.Router();

vehicle.get("/getVehicles", withAnyAuth, async (req, res) => {
    //Validate the request

    //Execute the stored function
    database.func("getVehicles", req.user.APIKey)
        .then(data => {
            res.status(200).json(data[0].getVehicles).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

vehicle.post("/postVehicle", withAdminAuth, async (req, res) => {
    //Validate the request

    //Execute the stored procedure
    database.proc("postVehicle", [req.user.APIKey, req.body.name, req.body.seasonsDriven])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

module.exports = vehicle;
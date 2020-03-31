"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const vehicleSpec = express.Router();

vehicleSpec.get("/getVehicleSpec/:vehicleID", withAnyAuth, async (req, res) => {
    //Validate the request

    //Execute the stored function
    database.func("getVehicleSpec", [req.user.APIKey, req.params.vehicleID]) 
        .then(data => {
            res.status(200).json(data[0].getVehicleSpec).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

vehicleSpec.post("/postVehicleSpec", withAdminAuth, async (req, res) => {
    //Validate the request
    
    //Execute the stored procedure
    database.proc("postVehicleSpec",
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
            req.body.daq,
            req.user.APIKey, 
        ])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

module.exports = vehicleSpec;

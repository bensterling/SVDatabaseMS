"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const race = express.Router();

function getLogData(req) {
    //Do getLogs (Will be used for getRaceCSV)
}

race.get("/getLogs", withAnyAuth, async (req, res) => {
    //Validate the request

    //Request:
    //raceId, vehicleId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //CSV file containing all the logs for the race
});

race.get("/getRaceCSV", withAnyAuth, async (req, res) => {
    //Validate the request

    //Request:
    //raceId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //CSV file containing all the logs for the race
});

race.put("/putEndDate", withAdminAuth, async (req, res) => { //TODO -- Need to involve API key
    //Validate the request

    //Execute stored procedure
    database.proc("putRaceEndDate", [req.body.raceId, req.body.vehicleId])
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
});

race.post("/postRace", withAdminAuth, async (req, res) => { //TODO -- Need to involve API Key
    //Validate the request
    
    //Execute stored procedure
    database.proc("postRace", [req.body.vehicleId, req.body.startTime, null])
        .then(data => {
            res
                .status(200)
                .send("Success!")
                .end();
        })
        .catch(error => {
            res
                .status(200)
                .send("Error!")
                .end();
        });
});

module.exports = race;
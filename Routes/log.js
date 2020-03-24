"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const log = express.Router();

log.post("/postLog", async (req, res) => {
    //Execute the stored procedure
    database.proc("postLog",
        [
            req.body.utc,
            req.body.value,
            req.body.raceId,
            req.body.sensorId
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
});

module.exports = log;
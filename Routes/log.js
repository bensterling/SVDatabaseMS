"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAdminAuth = require("../Middleware/auth")[1];
const log = express.Router();

log.post("/postLog", withAdminAuth, async (req, res) => { //API Key only auth? Won't ever be posting this manually
    //Validate the request

    //Execute the stored procedure
    database.proc("postLog",
        [
            req.user.APIKey,
            req.body.utc,
            req.body.value,
            req.body.raceId,
            req.body.sensorId
        ])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

module.exports = log;
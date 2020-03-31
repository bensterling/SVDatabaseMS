"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const uuidAPIKey = require("uuid-apikey");
const { validationResult } = require("express-validator");
const withAnyAuth = require("../Middleware/auth")[0];
const team = express.Router();

team.get("/getAllTeams", withAnyAuth, async (req, res) => {
    //Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        }).end();
    }
    //Execute the stored function
    database.func("getAllTeams")
        .then(data => {
            res.status(200).json(data[0].getAllTeams).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

team.get("/getTeam", withAnyAuth, async (req, res) => {
    //Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        }).end();
    }
    //Execute the stored function
    database.func("getTeam", req.user.APIKey)
        .then(data => {
            res.status(200).json(data[0].getTeam).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

team.post("/postTeam", async (req, res) => {
    //Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        }).end();
    }
    //Execute the stored procedure
    const apiKey = (uuidAPIKey.create()).apiKey;
    database.proc("postTeam",
        [
            req.body.name,
            req.body.location,
            req.body.university,
            apiKey
        ])
        .then(data => {
            res.status(200).send("Success! The API Key for this team is: " + apiKey).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

module.exports = team;

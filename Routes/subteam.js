"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const subteam = express.Router();

subteam.get("/getSubteams", withAnyAuth, async (req, res) => {
    //Validate the request
    
    //Execute the stored function
    database.func("getSubteams", [req.user.APIKey])
        .then(data => {
            res.status(200).json(data[0].getSubteams).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

subteam.post("/postSubteam", withAdminAuth, async (req, res) => {
    //Validate the request

    //Execute the stored procedure
    database.proc()
        .then(data => { })
        .catch(error => { });
});

module.exports = subteam;

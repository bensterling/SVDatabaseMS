"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const subteam = express.Router();

subteam.get("/getAllSubteams", async (req, res) => {
    //Execute the stored function
    database.func("getAllSubteams", [req.body.teamId])
        .then(data => {
            res
                .status(200)
                .json(data[0])
                .end();
        })
        .catch(error => {
            res
                .status(500)
                .send("Error!")
                .end();
        });
});

subteam.post("/postSubteam", async (req, res) => {
    database.proc()
        .then(data => { })
        .catch(error => { });
});

module.exports = subteam;

"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const team = express.Router();

team.get("/getAllTeams", async (req, res) => {
    database.func("getAllTeams")
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

team.post("/postTeam", async (req, res) => {
    //Request:
    //Team(Name, Location, University)
    database
        .proc()
        .then(data => { })
        .catch(error => { });
    //Response:
    //Confirmation or error
});

module.exports = team;

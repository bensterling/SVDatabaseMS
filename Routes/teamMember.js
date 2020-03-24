"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const teamMember = express.Router();

teamMember.get("/authenticate", async (req, res) => {
    //Request:
    //Email, Password
    database
        .func()
        .then(data => { })
        .catch(error => { });
    //Response:
    //JSON Web Token
});

teamMember.get("/getAllTeamMembers", async (req, res) => {
    database.func("getAllTeamMembers", [req.body.teamId]) //teamId will be in the token
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

teamMember.put("/putNewName", async (req, res) => {
    //Request:
    //teamMemberId
    database
        .proc()
        .then(data => { })
        .catch(error => { });
    //Response:
    //Confirmation or error
});

teamMember.post("/createTeamMember", async (req, res) => {
    //Request:
    //teamId, TeamMember(FN, LN, Years_on_team)
    database
        .proc()
        .then(data => { })
        .catch(error => { });
    //Response:
    //Confirmation or error
});

module.exports = teamMember;

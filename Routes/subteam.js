"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const subteam = express.Router();

subteam.get("/getAllSubteams", async (req, res) => {
  //Request:
  //teamId
  database
    .func("getAllSubteams", [req.body.teamId])
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
  //Response:
  //List of all subteams for the given team
});

subteam.post("/postSubteam", async (req, res) => {
  //Request:
  //teamId, Subteam(Name, Specialization)
  database
    .proc()
    .then(data => {})
    .catch(error => {});
  //Response:
  //Confirmation or error
});

module.exports = subteam;

'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const subteam = express.Router();

subteam.get('/getAllSubteams', async (req, res) => {
    //Request:
    //teamId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //List of all subteams for the given team
});

subteam.post('/postSubteam', async (req, res) => {
    //Request:
    //teamId, Subteam(Name, Specialization)
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = subteam;
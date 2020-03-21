'use strict';

const express = require('express');
const team = express.Router();

team.get('getAllTeams', async(req, res) => {
    //Reqeust:
    //NONE

    //Response:
    //List of all teams in the database
});

team.post('/postTeam', async(req, res) => {
    //Request:
    //Team(Name, Location, University)

    //Response:
    //Confirmation or error
});

module.exports = team;
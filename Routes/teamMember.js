'use strict';

const database = require('../Configuration/postgreSQL');
const express = require('express');
const teamMember = express.Router();

teamMember.get('/authenticate', async (req, res) => {
    //Request:
    //Email, Password
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //JSON Web Token
});

teamMember.get('/getAllTeamMembers', async (req, res) => {
    //Request:
    //teamId
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //List of all team members for the given team
});

teamMember.post('/createTeamMember', async (req, res) => {
    //Request:
    //teamId, TeamMember(FN, LN, Years_on_team)
    database.func()
        .then(data => {

        })
        .catch(error => {

        });
    //Response:
    //Confirmation or error
});

module.exports = teamMember;
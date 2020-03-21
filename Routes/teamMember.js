'use strict';

const express = require('express');
const teamMember = express.Router();

teamMember.get('/authenticate', async(req, res) => {
    //Request:
    //Email, Password

    //Response:
    //JSON Web Token
});

teamMember.get('/getAllTeamMembers', async(req, res) => {
    //Request:
    //teamId

    //Response:
    //List of all team members for the given team
});

teamMember.post('/createTeamMember', async(req, res) => {
    //Request:
    //teamId, TeamMember(FN, LN, Years_on_team)

    //Response:
    //Confirmation or error
});

module.exports = teamMember;
"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const withAnyAuth = require("../Middleware/auth")[0];
const teamMember = express.Router();

teamMember.get("/authenticate", async (req, res) => {
    //Validate the request
    
    //Execute the stored function
    database.func("getTeamMember", req.body.email)
        .then(async data => {
            if (data.length === 0) {
                res.status(404).send("User not found!").end();
            } else {
                data = data[0].getTeamMember;
                const isMatch = await bcrypt.compare(req.body.password, data.password);
                if (isMatch) {
                    const payload = {
                        user: {
                            APIKey: data.api_key,
                            id: data.member_id
                        }
                    }
                    jwt.sign(payload, (data.is_subteam_member) ? "NonAdminSecret" : "AdminSecret", { expiresIn: "60m" }, (err, token) => {
                        if (err) res.status(500).send("Error!").end();
                        res.cookie("token", token, { httpOnly: true });
                        res.status(200).send("Authenticated!").json({
                            firstName: data.first_name,
                            lastName: data.lastName,
                            email: data.email,
                            subteam: data.subteam_name
                        }).end();
                    })
                } else res.status(400).send("Password is incorrect!").end();
            }
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

teamMember.get("/getAllTeamMembers", withAnyAuth, async (req, res) => {
    //Validate the request
    
    //Execute the stored function
    database.func("getAllTeamMembers", req.user.APIKey)
        .then(data => {
            res.status(200).json(data[0]).end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

teamMember.put("/putNewName", withAnyAuth, async (req, res) => { //TODO
    //Validate the request
    
    //Execute the stored procedure
    database.proc("putNewName", [req.user.member_id, req.body.firstName, req.body.lastName])
        .then(data => {
            res.status(200).send('Success!').end();
        })
        .catch(error => {
            console.log(error)
            res.status(500).send("Error!").end();
        });
});

teamMember.post("/postTeamMember", async (req, res) => { //Need to check that only one of isCaptain, ..., is true
    //Validate the request
    
    //Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    //Execute the stored procedure
    database.proc("postTeamMember",
        [
            req.body.APIKey,
            req.body.firstName,
            req.body.lastName,
            req.body.isCaptain,
            req.body.isEngineeringLead,
            req.body.isSubteamLead,
            req.body.isSubteamMember,
            req.body.email,
            password,
            req.body.subteamName
        ])
        .then(data => {
            res.status(200).send('Success!').end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

module.exports = teamMember;

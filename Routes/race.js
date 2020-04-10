"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const withAnyAuth = require("../Middleware/auth")[0];
const withAdminAuth = require("../Middleware/auth")[1];
const fs = require('fs');
const io = require('socket.io-client');
const race = express.Router();

race.get("/getLogs/:vehicleId/:raceId", withAnyAuth, async (req, res) => {
    //Validate the request

    //Execute the stored function
    database.func("getLogs", [req.user.APIKey, req.params.vehicleId, req.params.raceId])
        .then(data => {
            res.status(200).json(data[0].getLogs).end();
        })
        .catch(error => {
            res.status(200).send("Error!").end();
        });
});

race.get("/getRaceCSV/:vehicleId/:raceId", withAnyAuth, async (req, res) => {
    //Validate the request

    //Execute the stored function
    database.func("getLogs", [req.user.APIKey, req.params.vehicleId, req.params.raceId])
        .then(data => {
            var socket = io.connect('http://localhost:5000', { reconnect: false, transports: ['websocket'] });
            socket.on('connect', () => {
                socket.emit("generateCSV", data[0].getLogs);
                socket.on('data', (fileName) => {
                    //Send the file
                    const filePath = 'LogConverter/' + fileName;
                    const stat = fs.statSync(filePath);
                    res.writeHead(200, {
                        'Content-Type': 'text/csv',
                        'Content-Length': stat.size
                    });
                    var readStream = fs.createReadStream(filePath);
                    readStream.pipe(res);
                    //Delete the temporary csv file
                    fs.unlink(filePath, (err) => {
                        if (err) console.log(err)
                    });
                    socket.close()
                });
                socket.on("error", (error) => {
                    //Handle error sent from python script
                });
            })
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

race.put("/putRaceEndDate", withAdminAuth, async (req, res) => { 
    //Validate the request

    //Generate the current time
    let endDate = new Date();
    endDate = endDate.getFullYear() + "-"
        + endDate.getMonth() + "-"
        + ("0" + endDate.getDate()).slice(-2) + "-"
        + endDate.getHours() + ":"
        + endDate.getMinutes();
    //Execute stored procedure
    database.proc("putRaceEndDate", [req.user.APIKey, req.body.raceId, req.body.vehicleId, endDate])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

race.post("/postRace", withAdminAuth, async (req, res) => { 
    //Validate the request

    //Generate the current time
    let startDate = new Date();
    startDate = startDate.getFullYear() + "-"
        + startDate.getMonth() + "-"
        + ("0" + startDate.getDate()).slice(-2) + "-"
        + startDate.getHours() + ":"
        + startDate.getMinutes();
    //Execute stored procedure
    console.log(req.user.APIKey);
    console.log(req.body.vehicleId);
    database.func("postRace", [req.user.APIKey, req.body.vehicleId, startDate])
        .then(data => {
            res.status(200).json({
                race_id: data[0].rv
            }).end();
        })
        .catch(error => {
            console.log(error)
            res.status(500).send("Error!").end();
        });
});

module.exports = race;
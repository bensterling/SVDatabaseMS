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
                    const filePath = 'LogConverter/' + fileName;
                    const stat = fs.statSync(filePath);
                    res.writeHead(200, {
                        'Content-Type':'text/csv',
                        'Content-Length': stat.size
                    });
                    var readStream = fs.createReadStream(filePath);
                    readStream.pipe(res);

                    fs.unlink(filePath, (err) => {
                        if (err) console.log(err)
                    });
                    socket.close()
                });
                socket.on("error", (error) => {
            
                });
            })
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

race.put("/putEndDate", withAdminAuth, async (req, res) => { //TODO -- Need to involve API key
    //Validate the request

    //Execute stored procedure
    database.proc("putRaceEndDate", [req.body.raceId, req.body.vehicleId])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

race.post("/postRace", withAdminAuth, async (req, res) => { //TODO -- Need to involve API Key
    //Validate the request

    //Execute stored procedure
    database.proc("postRace", [req.body.vehicleId, req.body.startTime, null])
        .then(data => {
            res.status(200).send("Success!").end();
        })
        .catch(error => {
            res.status(500).send("Error!").end();
        });
});

module.exports = race;
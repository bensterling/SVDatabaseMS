"use strict";

const database = require("../Configuration/postgreSQL");
const express = require("express");
const driver = express.Router();

//Zach
driver.get('/getDrivers', async (req, res) => {
    //Request:
    //teamId
    database
      .func("getAllDrivers") //This is how you call a stored procedure
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
    //Drivers for the specified team
});

driver.post('/assignDriverToVehicle', async (req, res) => {
    //Execute the stored procedure
    database.proc('assignDriverToVehicle',
        [
            req.body.teamId, //teamId will be in the web token
            req.body.driverId,
            req.body.vehicleId
        ])
        .then(data => {
            res.status(200).send('Success!').end();
        })
        .catch(error => {
            res.status(500).send('Error!').end();
        });
});

driver.post('/postDriver', async (req, res) => {
    //Execute the stored procedure
    database.proc('postDriver',
        [
            req.body.teamId, //teamId will be in the web token
            req.body.firstName,
            req.body.lastName,
            req.body.yearsOfExperience,
            req.body.age,
            req.body.height,
            req.body.weight
        ])
        .then(data => {
            res.status(200).send('Success!').end();
        })
        .catch(error => {
            res.status(500).send('Error!').end();
        });
});

module.exports = driver;

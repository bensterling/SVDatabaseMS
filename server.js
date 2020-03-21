'use strict';

//Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Setup
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Import Routes
const driver = require('./Routes/driver');
const log = require('./Routes/log');
const race = require('./Routes/race');
const sensor = require('./Routes/sensor');
const subteam = require('./Routes/subteam');
const team = require('./Routes/team');
const teamMember = require('./Routes/teamMember');
const vehicle = require('./Routes/vehicle');
const vehicleSpec = require('./Routes/vehicleSpec');

//Add Routes
app.use('/driver', driver);
app.use('/log', log);
app.use('/race', race);
app.use('/sensor', sensor);
app.use('/subteam', subteam);
app.use('/team', team);
app.use('/teamMember', teamMember);
app.use('/vehicle', vehicle);
app.use('/vehicleSpec', vehicleSpec);

//Start Server
app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`)
});
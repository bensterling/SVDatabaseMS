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
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'xCufvwEyu14Tuu7l',
    resave: true,
    saveUninitialized: true,
    secure: true
}));
app.use(cookieParser());

//Add paths
//For example:
//const teamMember = require('./teamMember');
//app.use('/api/teamMember', teamMember);

app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`)
});
'use strict';

const { Pool } = require('pg');

const database = new Pool({
    port: 5432,
    password: 'greentomato',
    database: 'postgres',
    host: 'schulichvelocitydb.cpzvldpktisu.us-east-2.rds.amazonaws.com',
    user: 'postgres',
});

module.exports = database;
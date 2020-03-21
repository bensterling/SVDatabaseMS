'use strict';

const { Pool, Client } = require('pg');

PostGreSQL = new Pool({
    port: 5432,
    password: 'greentomato',
    database: 'postgres',
    host: '', //Our host
    user: 'postgres',
});

module.exports = PostGreSQL;
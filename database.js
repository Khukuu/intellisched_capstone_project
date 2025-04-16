const express = require('express');  // Importing Express for web server handling
const { Client } = require('pg');  // Importing pg for PostgreSQL interaction

const app = express();  // Creating an Express app

// Database connection settings
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'IntelliSched',
    database: 'postgres'
});

// Connecting to PostgreSQL
client.connect()
    .then(() => console.log('Connected to PostgreSQL!'))
    .catch(err => console.error('Connection error', err.stack));

// Defining a route for the homepage
app.get('/', (req, res) => {
    client.query('SELECT version()', (err, result) => {
        if (err) {
            res.send('Error occurred');
        } else {
            res.send(`PostgreSQL version: ${result.rows[0].version}`);
        }
    });
});

// Starting the server and listening on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

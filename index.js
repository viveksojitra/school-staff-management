const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const database = require('./configs/database');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', routes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server running on http://localhost:${PORT}/auth/signup`);
    } else {
        console.error('Error starting server:', err);
    }
});

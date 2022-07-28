const express = require('express');
const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());
//says take my current directory and add public to it to make me route for the things in the public folder good for images
app.use(express.static(path.join(__dirname, 'public')));

// App routes

app.use('/cats', require('./controllers/cats'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

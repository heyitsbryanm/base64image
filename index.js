const express = require('express');
const app = express();
const handlePng = require('./modules/handlePng');
const handleJpeg = require('./modules/handleJpeg');
const handleQueryParams = require('./modules/handleQueryParams');

// Use Heroku's dynamic port or fallback to 3000
const port = process.env.PORT || 3000;

app.get('/image', (req, res) => {
    return handleQueryParams(req, res);
});


app.get('/png/*', (req, res) => {
    return handlePng(req,res)
});

app.get('/jpeg/*', (req, res) => {
    return handleJpeg(req,res)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

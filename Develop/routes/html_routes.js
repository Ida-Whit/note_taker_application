//Import required tools
const html = require('express').Router();
const path = require('path');


//GET function to bring up notes.html file.
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})


//GET request to bring up index.html file.
html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = html;
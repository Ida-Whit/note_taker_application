const router = require('express').Router();
const path = require('path');

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/notes.html'))
})


//get request to display index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/index.html'))
});

module.exports = router
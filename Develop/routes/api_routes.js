const router = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.get('/api/notes', (req, res) => {
    fs.readFile(notes, (err, data) => {
        if (err) throw err;
        let noteData = JSON.parse(data);
        res.json(noteData)
    })
})

app.post('api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(notes);
})

module.exports = router
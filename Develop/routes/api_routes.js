//Import needed elements.
const api = require('express').Router();
const fs = require('fs');
const path = require('path');

//Import helper functions for reading and writing to JSON file.
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid')

//GET Route to retrieve all existing notes
api.get('/api/notes', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// GET route for single note
api.get('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/notes.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id === noteId);
            return result.length > 0
            ? res.json(result)
            : res.json('No note found with that ID');
        });
});

//POST route for inputting new note
api.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to submit feedback`);

    const { title, text } = req.body;

    if(title && text) {
        const newNote = {
            title: title,
            text: text,
            id: uuid(),
    };

    readAndAppend(newNote, './db/notes.json');

    const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);

} else {
    res.json('Error in posting note');
};
});

// //DELETE route to delete specific notes
// api.delete('api/notes/:id', (req, res) => {
//     const noteId = req.params.id;

//     readFromFile('./db/notes.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//         const results = json.filter((note) => note.id !== noteId);
//         return writeToFile('./db/notes.json', results);
//     })
//     .then (() => {
//         res.json('Note successfully deleted');
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to delete note' });
//     });
// });


//Export router
module.exports = api
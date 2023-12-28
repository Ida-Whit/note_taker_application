//Import needed elements.
const api = require('express').Router();
const fs = require('fs');
const path = require('path');

//Import helper functions for reading and writing to JSON file.
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


//const { v4: uuidv4 } = require('uuid');

//GET Route to retrieve all existing notes
api.get('api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..Develop/db/notes.json'));
});

//POST route for inputting new note
api.post('api/notes', (req, res) => {
    console.info(`${req.method} request received to submit feedback`);
    const{ title , text } = req.body;

    if(title && text) {
        const newNote = {
            title,
            text
    };
       
    readAndAppend(newNote, './db/notes.json');

    const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);

} else {
    res.json('Error in posting feedback');
};
});


//Export router
module.exports = api
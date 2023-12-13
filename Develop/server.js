//Download dependencies
const express = require('express');

//use express
const app = express()

//Define PORT to be used
const PORT = process.env.PORT || 3001;

//Create static route for public folder.
app.use(express.static('public'));

//Create middleware function to parse json data
app.use(express.json());

//Add functionality that lets user know when program is listening in.
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
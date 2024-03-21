//Declare Variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

//Import routes
const api = require('./Develop/routes/api_routes.js');
const html = require('./Develop/routes/html_routes.js');


//Create static route for public folder.
app.use(express.static(path.join(__dirname, "public")));

//Create middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api);
app.use(html);

//Add functionality that lets user know when program is listening in.
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
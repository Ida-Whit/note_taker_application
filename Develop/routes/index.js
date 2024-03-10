const router = require('express').Router();

//Import individual route files
const apiRouter = require('./api_routes');
const htmlRouter = require('./html_routes');

//Register each route to the router
router.use('/api', apiRouter);
router.use('/notes', htmlRouter);

//Export from the page
module.exports = router
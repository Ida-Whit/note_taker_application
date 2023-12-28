const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/notes.html'))
})


//get request to display index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/index.html'))
});

module.exports = router;
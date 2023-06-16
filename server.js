const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')))


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

app.use(require('./app/routes/note.routes.js'))

app.use( ( req, res ) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
    })


app.listen(port, () => {
    console.log("probably listening on port " + port);
});


const express = require("express");
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')))


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

app.use(require('/app/routes/note.routes.js'))

app.use( ( req, res ) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));


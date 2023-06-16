const express = require("express");
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')))

app.use(require('routes/note.routes.js'))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'src/notes.html'))
})

app.use( ( req, res ) => {
    res.sendFile(path.join(__dirname,'src/index.html'))
})


app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));


const uniqid = require('uniqid');
const express = require("express");
const noteRoutes = express.Router();
const fs = require("fs");
var bodyParser = require('body-parser')
const dataPath = "./app/database/db.json";

var jsonParser = bodyParser.json()

const saveNoteData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};
const getNoteData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

noteRoutes.get("/api/notes",(req, res) => {
  const notes = getNoteData();
  res.send(notes);
});

noteRoutes.post("/api/notes", jsonParser,  (req, res) => {
  var existNotes = getNoteData();
  req.body.id = uniqid();
  existNotes.push(req.body)
  saveNoteData(existNotes);
  res.send("Note added");
});

noteRoutes.delete("/api/notes/:id", (req, res) => {
  const noteId = req.params.id;
  var existNotes = getNoteData();
  const newNotes = existNotes.filter((note) => note.id != noteId);
  saveNoteData(newNotes);
  res.send(`Note deleted`);
});


module.exports = noteRoutes;

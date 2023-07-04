# express note-taker

For taking notes

## Description

This is a note taking app that allows you to create, save, and delete notes. It uses express to handle the backend and save the notes to a json file.

## Behind the Scenes

This app uses express to handle the backend and save the notes to a json file. The notes are saved as an array of objects with a title and text property. The app uses the fs module and body-parser to read and write to the json file. The app uses the path module to serve the html files. The app uses the uniqid module to generate unique ids for each note.

## Usage

To use this app, go to the [deployed site](https://take-notes-bootcamp-15cac109df76.herokuapp.com/notes) and click the get started button. You can then create a new note and save it. You can delete notes by clicking the trash icon next to the note.


## License

This project is licensed under the MIT license.
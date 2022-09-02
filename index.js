const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api)

console.log("The notes app is running");
console.log(model.getNotes());
console.log("You've added a note!")

// model.addNote("This is an example note")
// view.displayNotes()
// view.addNote()
view.displayNotesFromApi();
// api.createNotes("Hello")


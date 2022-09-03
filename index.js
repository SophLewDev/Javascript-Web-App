const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api)

console.log("The notes app is running");
console.log(model.getNotes());
console.log("You've added a note!")

api.loadNotes((notes) => {
  // This will be executed if notes are loaded correctly from the server
  model.setNotes(notes);
  view.displayNotes();
}, () => {
  // This will be executed if there's an error
  view.displayError();
});
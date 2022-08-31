const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const model = new NotesModel();
const view = new NotesView(model)

console.log("The notes app is running");
console.log(model.getNotes());

model.addNote("This is an example note")
view.displayNotes()
model.getNotes()
console.log("You've added a note!")
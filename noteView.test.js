/**
 * @jest-environment jsdom
 */
 
const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel');

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });
  
  it("displays the list of notes", () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    model.addNote("Hello")
    view.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(1)
  })
})
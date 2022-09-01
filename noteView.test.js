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
  
  it("displays the added note", () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    const noteButtonEl = document.querySelector("#add-note-button");
    const noteInputEl = document.querySelector("#note-input")
    noteInputEl.value = "This is a new note"
    noteButtonEl.click()
    expect(document.querySelector(".note").textContent).toBe("This is a new note")
    expect(document.querySelectorAll(".note").length).toBe(1)
  })
  
  it("displays the correct number of added notes", () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    const noteButtonEl = document.querySelector("#add-note-button");
    const noteInputEl = document.querySelector("#note-input")
    noteInputEl.value = "This is a new note"
    noteButtonEl.click()
    noteButtonEl.click()
    expect(document.querySelectorAll(".note").length).toBe(2)
  })
  it("displays an empty input element after adding a note", () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    const noteButtonEl = document.querySelector("#add-note-button");
    const noteInputEl = document.querySelector("#note-input")
    noteInputEl.value = "This is a new note"
    noteButtonEl.click()
    expect(document.querySelector("#note-input").value).toBe("")
  })
})
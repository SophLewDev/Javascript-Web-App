/**
 * @jest-environment jsdom
 */
 
const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');
require("jest-fetch-mock").enableMocks();
// jest.mock('./notesApi')

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });
  
  it("displays the list of notes", () => {
    const model = new NotesModel;
    const api = new NotesApi;
    const view = new NotesView(model, api);
    model.addNote("Hello")
    view.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(1)
  })
  
  it("displays the added note", () => {
    const model = new NotesModel;
    const api = new NotesApi;
    const view = new NotesView(model, api);
    const noteButtonEl = document.querySelector("#add-note-button");
    const noteInputEl = document.querySelector("#note-input")
    noteInputEl.value = "This is a new note"
    noteButtonEl.click()
    expect(document.querySelector(".note").textContent).toBe("This is a new note")
    expect(document.querySelectorAll(".note").length).toBe(1)
  })
  
  it("displays the correct number of added notes", () => {
    const model = new NotesModel;
    const api = new NotesApi;
    const view = new NotesView(model, api);
    const noteButtonEl = document.querySelector("#add-note-button");
    const noteInputEl = document.querySelector("#note-input")
    noteInputEl.value = "This is a new note"
    noteButtonEl.click()
    noteButtonEl.click()
    expect(document.querySelectorAll(".note").length).toBe(2)
  })

  it("displays an empty input element after adding a note", () => {
    const model = new NotesModel;
    const api = new NotesApi;
    const view = new NotesView(model, api);
    const noteButtonEl = document.querySelector("#add-note-button");
    const noteInputEl = document.querySelector("#note-input")
    noteInputEl.value = "This is a new note"
    noteButtonEl.click()
    expect(document.querySelector("#note-input").value).toBe("")
  })
  
  it("displays the notes from the API", () => {
    const model = new NotesModel;
    const api = new NotesApi;
    const view = new NotesView(model, api);

    fetch.mockResponseOnce(
          JSON.stringify(["Example 1", "Example 2"])
        );

    view.displayNotesFromApi(() => {
      expect(document.querySelector(".note").length).toEqual(2);
      expect(document.querySelector(".note").textContent).toBe('Example 1');
    });
    expect(document.querySelector(".note")).toBeNull();
    expect(document.querySelectorAll(".note").length).toBe(0);
 })
  fit("display an error message", () => {
    const model = new NotesModel;
    const api = new NotesApi;
    const view = new NotesView(model, api);

    fetch.mockResponseOnce(
      JSON.stringify(null)
    );

    view.displayError(() => {
      expect(document.querySelector(".error").textContent).toEqual("Oops, something went wrong!")
    })
  })
})
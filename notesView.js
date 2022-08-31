const NotesModel = require("./notesModel")

class NotesView {
  constructor(model) {
    this.model = model;
  }

  displayNotes() {
    this.model.getNotes().forEach(note => {
      const body = document.querySelector("body")
      const newElement = document.createElement("div")
      newElement.classList.add("note")
      newElement.textContent = note
      body.append(newElement)
    })
    document.querySelectorAll('div')
  }

}

module.exports = NotesView;
//document.querySelector('div').textContent = this.model.getNotes();
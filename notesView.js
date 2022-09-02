class NotesView {
  constructor(model, api) {
    this.api = api;
    this.model = model;
    this.noteButtonEl = document.querySelector("#add-note-button")
    this.newNote = document.querySelector("#note-input");

    this.noteButtonEl.addEventListener("click", () => {
      this.addNote();
      this.removeNotes();
      // this.createNoteFromApi();
      this.displayNotes();
      this.newNote.value = "";
    })
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

  displayNotesFromApi() {
    this.api.loadNotes((data) => {
      this.model.setNotes(data)
      this.displayNotes()
    })
  }

  // createNoteFromApi(){
  //   this.api.createNotes(this.newNote.value);
  // }

  addNote() {
    this.model.addNote(this.newNote.value);
  }
  
  removeNotes() {
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    })
  }
}

module.exports = NotesView;
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
        setNotes(apiNotes) {
          this.notes = apiNotes;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.api = api2;
          this.model = model2;
          this.noteButtonEl = document.querySelector("#add-note-button");
          this.newNote = document.querySelector("#note-input");
          this.noteButtonEl.addEventListener("click", () => {
            this.addNote();
            this.removeNotes();
            this.displayNotes();
            this.newNote.value = "";
          });
        }
        displayNotes() {
          this.model.getNotes().forEach((note) => {
            const body = document.querySelector("body");
            const newElement = document.createElement("div");
            newElement.classList.add("note");
            newElement.textContent = note;
            body.append(newElement);
          });
          document.querySelectorAll("div");
        }
        displayNotesFromApi() {
          this.api.loadNotes((data) => {
            this.model.setNotes(data);
            this.displayNotes();
          });
        }
        addNote() {
          this.model.addNote(this.newNote.value);
        }
        removeNotes() {
          document.querySelectorAll(".note").forEach((note) => {
            note.remove();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesApi = require_notesApi();
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  console.log("The notes app is running");
  console.log(model.getNotes());
  console.log("You've added a note!");
  view.displayNotesFromApi();
})();

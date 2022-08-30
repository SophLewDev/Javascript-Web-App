class NotesModel {
  constructor (){
    this.notes = []
  }
  getNotes(){
    return this.notes;
  }

  addNote(note){
    this.notes.push(note);
  }
  reset(){
    this.notes = []
    // @notes = []
  }

}
module.exports = NotesModel ;
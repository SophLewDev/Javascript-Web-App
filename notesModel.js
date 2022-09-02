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
  }

  setNotes(apiNotes) {
    this.notes = apiNotes;
  }
}

module.exports = NotesModel ;


// class GithubModel {
//   constructor() {
//     this.repoInfo = null
//   }

//   setRepoInfo(repoInfo) {
//     this.repoInfo = repoInfo;
//   }

//   getRepoInfo() {
//     return this.repoInfo;
//   }
// }

// module.exports = GithubModel;
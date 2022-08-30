const NotesModel = require('./notesModel');

describe('Note Model Class', () => {
    it('returns all the notes', () => {
      const model = new NotesModel();
      expect(model.getNotes()).toEqual([]);
    });
    
    it('return added note',()=>{
      const model = new NotesModel();
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
    });

    it('returns an empty array', ()=>{
        const model = new NotesModel();
        model.addNote('delete this');
        expect(model.getNotes()).toEqual(['delete this']);
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
});
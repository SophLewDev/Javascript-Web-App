const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });
  
  it('calls fetch and loads data', () => {
    const api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    api.loadNotes((returnedNotesFromApi) => {
      expect(returnedNotesFromApi.name).toBe("Some value");
      expect(returnedNotesFromApi.id).toBe(123);
    });
  });
  
  it("calls fetch and creates a new note", () => {
    const api = new NotesApi();
    const note = "note"

    // api.createNotes(note)
    // api.loadNotes((returned) => {
    //   expect(returned).toEqual("note")
    // })
  })
});
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('API class', () => {
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
});
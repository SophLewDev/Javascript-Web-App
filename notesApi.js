class NotesApi {
  loadNotes(callback, errorCb) {
    fetch("http://localhost:3000/notes")
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
    .catch((error) => {
      console.log(error)
      errorCb(error)
    })
  }

  createNotes(note, cb) {
    let data = {content: note}
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
        cb(error)
      });
  }
}

module.exports = NotesApi;

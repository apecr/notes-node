const fs = require('fs');

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  var note = {
    title,
    body
  };
  const duplicateNotes = notes.filter(oneNote => oneNote.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => console.log('Getting all notes');

const getNote = title => console.log('Getting note', title);

const removeNote = title => console.log('Removing note', title);

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
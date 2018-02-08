const fs = require('fs');


const addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  try {
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {

  }
  const duplicateNotes = notes.filter(oneNote => oneNote.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
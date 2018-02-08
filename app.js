const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
let note = {};
const messageNote = nota => `--\nTitle: ${nota.title}\nBody: ${nota.body}`;

if (command === 'add') {
  note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log(`Note with title '${argv.title}' already exists`);
  } else {
    console.log('Note created');
    console.log(messageNote(note));
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  note = notes.getNote(argv.title);
  const message = note ? `Note found\n${messageNote(note)}`  : 'Note does not exist';
  console.log(message);
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognize');
}
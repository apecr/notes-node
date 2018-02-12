const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {title, body})
  .command('list', 'List all notes')
  .command('read', 'Read an individual note', {title})
  .command('remove', 'Remove a note', {title})
  .help()
  .argv;
const command = argv._[0];
let note = {};
const messageNote = nota => {
  return `--\nTitle: ${nota.title}\nBody: ${nota.body}`;
};

if (command === 'add') {
  note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log(`Note with title '${argv.title}' already exists`);
  } else {
    console.log('Note created');
    console.log(messageNote(note));
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(element => {
    console.log(`${messageNote(element)}`);
  });
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
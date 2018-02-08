const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
  if (notes.addNote(argv.title, argv.body) === undefined) {
    console.log(`Note with title '${argv.title}' already exists`);
  } else {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognize');
}
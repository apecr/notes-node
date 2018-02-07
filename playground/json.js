// const obj = {
//   name: 'Alberto'
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name": "Alberto", "age": 31}';
// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
const pctp = require('pisco-callback-to-promise');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);

pctp.c2p(fs.writeFile, 'notes.json', originalNoteString)
  .then(() => pctp.c2p(fs.readFile, 'notes.json'))
  .then(JSON.parse)
  .then(note => {
    console.log(typeof note);
    console.log(note.title);
  });

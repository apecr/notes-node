const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log('Starting app.js');

const errorManage = (error) => {
  if (error) {
    console.log('Unable to write to file');
  } else {
    console.log('Done file');
  }
};
const res = notes.addNote();
console.log(res);
console.log(`Result 12 plus 3 is: ${notes.add(12, 3)}`);


// const user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, errorManage);
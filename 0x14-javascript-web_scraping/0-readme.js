#!/usr/bin/node
// a script that reads and prints the content of a file
const fs = require('fs');

// file path
const file = process.argv[2];

// Read the contents of the file asynchronously
fs.readFile(file, 'utf-8', (err, data) => {
  if (err) {
    // If there was an error reading the file, log the error object to the console
    console.error(err);
    return;
  }
  // If the file was read successfully, log its contents to the console
  console.log(data);
});

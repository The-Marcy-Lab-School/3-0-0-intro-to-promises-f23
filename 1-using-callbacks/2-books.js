// NOTE: This program will only work if you are running it from the same directory.

/* 
fs is a built-in Node package with methods for interacting with your 'file system'
- fs.readFile also uses a callback to execute asynchronous code
- fs.readFile takes in a file path, an 'encoding' format, and a callback
*/
const fs = require('node:fs');

console.log('Reading the booksHuge.csv file');

fs.readFile('../data/booksHuge.csv', 'utf-8', (err, data) => {
  // this code is scheduled to run when the file is done being processed
  if (err) {
    console.error(err);
  } else {
    const lines = data.split('\n').length;
    console.log(`Done reading the booksHuge.csv file. There were ${lines - 1} books.`);
  }
});


// Since fs.readFile is asynchronous, we can simultaneously start reading the books.csv file without waiting
// TODO: read the books.csv file and print out how many lines are in it (excluding the header line).


// Q: How would you do this sequentially? That is, read booksHuge.csv and then books.csv, only after booksHuge.csv has finished.
/*
The code below is used to get relative file paths to the files in the ../data folder
- path is a built-in Node package for assembling filepaths to files in your filesystem
- path.join assembles an absolute path from two or more path parts
- In Node, __dirname returns the absolute path to the directory of this file
*/
const path = require('node:path');
const booksHugeFilePath = path.join(__dirname, '../data/booksHuge.csv');
const booksFilePath = path.join(__dirname, '../data/books.csv');

/* 
fs is a built-in Node package with methods for interacting with your "file system"
- fs.readFile also uses a callback to execute asynchronous code
- fs.readFile takes in a file path, an "encoding", and a callback
*/
const fs = require('node:fs');

console.log("Reading the booksHuge.csv file");

fs.readFile(booksHugeFilePath, 'utf-8', (err, data) => {
  // this code is scheduled to run when the file is done being processed
  if (err) {
    console.error(err);
  } else {
    const lines = data.split('\n').length;
    console.log(`Done reading the booksHuge.csv file. There were ${lines - 1} books.`);
  }
});


// We can simultaneously start reading the books.csv file without waiting
console.log("Reading the books.csv file");
fs.readFile(booksFilePath, 'utf-8', (err, data) => {
  // this code is scheduled to run when the file is done being processed
  if (err) {
    console.error(err);
  } else {
    const lines = data.split('\n').length;
    console.log(`Done reading the books.csv file. There were ${lines - 1} books.`);
  }
});


// Q: How would you do this sequentially? That is, read booksHuge.csv and then books.csv, only after booksHuge.csv has finished.
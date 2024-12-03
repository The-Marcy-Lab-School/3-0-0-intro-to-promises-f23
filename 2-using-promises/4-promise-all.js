const fs = require('node:fs/promises');
const path = require('node:path');

// __dirname returns the absolute path to the directory of this file
const booksFilePath = path.join(__dirname, '../data/books.csv');
const booksHugeFilePath = path.join(__dirname, '../data/booksHuge.csv');

/*
- TODO: "Refactor" this code to use promises 
- HINT: The .then callback is only given the data
- HINT: We only need one .catch to handle all errors
- HINT: Each .then returns a promise so we can chain together the .then and .catch calls!
*/
const booksHugePromise = fs.readFile(booksHugeFilePath, 'utf-8')
const booksPromise = fs.readFile(booksFilePath, 'utf-8')

// Promise.all waits for all promises to resolve (or reject) before executing the callback
console.log("Reading both files!");
Promise.all([booksHugePromise, booksPromise])
  .then((values) => {
    const booksHugeLines = values[0].split('\n').length;
    const booksLines = values[1].split('\n').length;
    console.log(`There were ${booksHugeLines} lines in booksHuge.csv!`);
    console.log(`There were ${booksLines} lines in books.csv!`);
  })
  .catch((err) => {
    console.error(err);
  });
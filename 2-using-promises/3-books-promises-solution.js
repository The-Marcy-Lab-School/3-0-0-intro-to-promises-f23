// Note: We're now using the promises version of fs
const path = require('node:path');

const booksFilePath = path.join(__dirname, '../data/books.csv');
const booksHugeFilePath = path.join(__dirname, '../data/booksHuge.csv');

/*
- TODO: "Refactor" this code to use promises 
- HINT: The .then callback is only given the data
- HINT: We only need one .catch to handle all errors
- HINT: Each .then returns a promise so we can chain together the .then and .catch calls!
*/
const fs = require('node:fs/promises');

console.log("Reading the booksHuge.csv file");
fs.readFile(booksHugeFilePath, 'utf-8')
  .then((data) => {
    const lines = data.split('\n').length;
    console.log(`Done reading the booksHuge.csv file. There were ${lines} lines.`);
  })
  .then(() => {
    console.log("Reading the books.csv file");
    // by returning the readFile promise, we can continue to chain
    return fs.readFile(booksFilePath, 'utf-8')
  })
  .then((data) => {
    const lines = data.split('\n').length;
    console.log(`Done reading the books.csv file. There were ${lines} lines.`);
  })
  .catch((err) => {
    console.error(err);
  });
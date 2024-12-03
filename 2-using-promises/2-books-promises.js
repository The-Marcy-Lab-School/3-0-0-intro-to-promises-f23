// Note: We're now using the promises version of fs
const fs = require('node:fs/promises');
const path = require('node:path');

const booksFilePath = path.join(__dirname, '../data/books.csv');
const booksHugeFilePath = path.join(__dirname, '../data/booksHuge.csv');

/*
TODO: 
- "Refactor" (rewrite) this code to use promises 
- Sequentially load in the books.csv file and print out its number of lines
HINTs: 
- The .then callback is only given the data, not the error
- We only need one .catch to handle all errors
- Each .then returns a promise allowing for chaining!
*/
console.log("Reading the booksHuge.csv file");
fs.readFile(booksHugeFilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const lines = data.split('\n').length;
    console.log(`Done reading the booksHuge.csv file. There were ${lines} lines.`);
  }
});
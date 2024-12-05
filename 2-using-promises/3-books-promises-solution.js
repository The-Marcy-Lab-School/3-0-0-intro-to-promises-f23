// NOTE: This program will only work if you are running it from the same directory.

// Note: We're now using the promises version of fs
const fs = require('node:fs/promises');

console.log("Reading the booksHuge.csv file");

// Often, we will just call .then directly on the function call
fs.readFile('../data/booksHuge.csv', 'utf-8')
  .then((data) => {
    const lines = data.split('\n').length;
    console.log(`Done reading the booksHuge.csv file. There were ${lines} lines.`);

    // start the next async process
    console.log("Reading the books.csv file next");

    // the promise returned here is handled by the next .then()
    return fs.readFile('../data/books.csv', 'utf-8');
  })
  .then((data) => {
    // handle the data from books.csv
    const lines = data.split('\n').length;
    console.log(`Done reading the books.csv file. There were ${lines} lines.`);
  })
  .catch((err) => {
    // We only need one error handler for both asynchronous function calls
    console.error(err);
  });

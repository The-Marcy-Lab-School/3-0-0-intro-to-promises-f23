// NOTE: This program will only work if you are running it from the same directory.

const fs = require('node:fs/promises');

// First, start both processes and save the promises
console.log("Reading both files!");
const booksHugePromise = fs.readFile('../data/booksHuge.csv', 'utf-8')
const booksPromise = fs.readFile('../data/books.csv', 'utf-8')

// Then, put the promises into an array
const promises = [booksHugePromise, booksPromise]

// Promise.all returns a promise that settles once all of the provided promises have settled
Promise.all(promises)
  .then((values) => {
    // values will contain the resolved values of the provided promises
    const booksHugeLines = values[0].split('\n').length;
    const booksLines = values[1].split('\n').length;
    console.log(`There were ${booksHugeLines} lines in booksHuge.csv!`);
    console.log(`There were ${booksLines} lines in books.csv!`);
  })
  .catch((err) => {
    // the err value will be from the first promise that fails
    console.error(err);
  });
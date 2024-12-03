const path = require('node:path');
const ravenFilePath = path.join(__dirname, '../data/the-raven.txt');

// Now, we'll use the promises version of fs
const fs = require('node:fs/promises');

console.log("Reading the-raven.txt");

// A Promise object is returned
const promise = fs.readFile(ravenFilePath, 'utf8');

// The .then and .catch methods schedule resolve/reject handlers
promise
  .then((data) => {
    const ravenCount = data.match(/raven/gi).length;
    console.log(`Done reading the-raven.txt.`)
    console.log(`There were ${ravenCount} mentions of "Raven".`);
  })
  .catch((err) => {
    console.log('Something went wrong!');
    console.error(err);
  });

// The object looks like this: Promise { <pending> }
console.log(promise);
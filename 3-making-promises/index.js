// 1. Create the new promise object, determining when it resolves and when it rejects
const rollPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const roll = Math.ceil(Math.random() * 6);

    // In this case, rolls 3,4,5, or 6 will resolve the promise
    // Rolls 1 or 2 will reject the promise
    if (roll > 2) {
      resolve(`Success! ${roll} was rolled`);
    } else {
      reject(`Failure. ${roll} was rolled`)
    }
  }, 5000);
});

// schedule a callback to execute when the promise resolves or rejects
rollPromise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((failureMessage) => {
    console.error(failureMessage);
  })


// Here is an asynchronous function that returns a promise that ALWAYS resolves
const makeGuarantee = () => {
  return new Promise((resolve, reject) => {
    resolve('100% of the time, it works every time');
  });
}

// How would you invoke this asynchronous function and handle the promise?

// Q: How can you make it always fail? How would you handle that failing promise?
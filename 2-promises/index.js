// This function makes a promise and returns it.
// The async operation takes 500ms to resolve
const asyncAction = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!"); // Yay! Everything went well!
    }, 500);
  });

  return promise;
}

const myFirstPromise = asyncAction();

myFirstPromise.then((successMessage) => {
  console.log(`Fulfilled! ${successMessage}`);
});
// successMessage is whatever the Promise resolves to in the function above.
// It doesn't have to be a string, but if it is only a succeed message, it probably will be.

console.log("when does this happen?");
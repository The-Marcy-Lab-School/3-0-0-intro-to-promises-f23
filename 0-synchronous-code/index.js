const start = () => console.log('start');

const longTask = () => {
  // runs 10 billion times! 
  for (let i = 0; i < 10000000000; i++) { }
  console.log(`done looping 10 billion times!`);
}

const end = () => console.log('end');

start();
longTask();
end();
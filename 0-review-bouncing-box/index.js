const box = document.querySelector('#box');
let x = 0;
let direction = 1;
let speed = 5;
let score = 0;

const update = () => {
  // move the box
  x += speed * direction;
  box.style.left = `${x}px`;

  // check for hitting the walls
  if (x > document.body.clientWidth) {
    direction = -1;
  }
  if (x < 0) {
    direction = 1;
  }
}

const increaseScore = () => {
  score++;
  speed++;
  box.textContent = score;
}

const main = () => {
  setInterval(update, 50)
  console.log('starting');

  box.addEventListener('click', increaseScore)
}

main();
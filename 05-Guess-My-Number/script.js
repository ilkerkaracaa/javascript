'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Refactoring the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    // When player wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > number ? 'Too high!' : 'Too low!';
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > number) {
    //   if (score > 1) {
    //     // document.querySelector('.message').textContent = 'Too high!';
    //     displayMessage('Too high!');
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     // document.querySelector('.message').textContent = 'You lost the game!';
    //     displayMessage('You lost the game!');
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < number) {
    //   if (score > 1) {
    //     // document.querySelector('.message').textContent = 'Too low!';
    //     displayMessage('Too low!');
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     // document.querySelector('.message').textContent = 'You lost the game!';
    //     displayMessage('You lost the game!');
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

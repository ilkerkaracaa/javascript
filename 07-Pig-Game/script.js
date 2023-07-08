'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0'); // # is used to select id
const score1El = document.getElementById('score--1'); // getElementById is faster than querySelector
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice'); // querySelector is used to select class
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; // 0 is first player, 1 is second player
  playing = true;

  score0El.textContent = 0; // textContent is used to change the text in the element
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); // hide the dice at the beginning of the game
  player0El.classList.remove('player--winner'); // remove the winner class from both players
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active'); // add the active class to the first player
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // set the current score to 0
  currentScore = 0; // set the current score to 0
  activePlayer = activePlayer === 0 ? 1 : 0; // switch the active player
  player0El.classList.toggle('player--active'); // toggle the active class
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // generate a random number between 1 and 6

    // 2. Display dice
    diceEl.classList.remove('hidden'); // remove the hidden class to show the dice
    diceEl.src = `dice-${dice}.png`; // change the dice image to the number generated

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice; // add the dice number to the current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // change the current score in the UI
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; // add the current score to the active player's score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // change the score in the UI

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false; // set playing to false to stop the game
      diceEl.classList.add('hidden'); // hide the dice
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // add the winner class to the active player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // remove the active class from the active player
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

init();

btnNew.addEventListener('click', init); // call the init function when the new game button is clicked

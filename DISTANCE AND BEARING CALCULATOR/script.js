'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'You guessed correctly!';
document.querySelector('.number').textContent = 17;
document.querySelector('.score').textContent = 12;
document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);*/
let theRandomNumber = Math.ceil(Math.random() * 40);
let score = 40;
let highScore = 0;
let playing = true;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no does'nt input a value
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    // when player wins
  } else if (guess === theRandomNumber) {
    document.querySelector('.number').textContent = theRandomNumber;
    document.querySelector('.message').textContent = 'Hurray, you won!';
    document.querySelector('.message').style.fontWeight = 'bold';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.fontWeight = '700';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.score').textContent = 'score';
    }
    // when player loses
  } else if (guess !== theRandomNumber) {
    if (score > 8) {
      document.querySelector('.message').textContent =
        guess > theRandomNumber ? 'your guess high📈 ' : 'your guess is low📉 ';
      score = score - 8;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Sorry, you lost the game';
      document.querySelector('.number').textContent = theRandomNumber;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

// resets the code for new game
document.querySelector('.again').addEventListener('click', function () {
  score = 40;
  theRandomNumber = Math.ceil(Math.random() * 40);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

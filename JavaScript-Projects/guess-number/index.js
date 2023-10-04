let random = parseInt(Math.random() * 100 + 1);
// console.log(random)
const submit = document.querySelector('#sbt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const reamining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    // console.log(guess)
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please Enter a valid Number');
  } else if (guess < 1) {
    alert('Please Enter a valid Number');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over!! Random Number Was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess == random) {
    displayMessage(`You Guessed it Right!!`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is Too Low`);
  } else if (guess > random) {
    displayMessage('Number is too High');
  }
}

function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  reamining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h3>${message}</h2>`;
}

function newGame() {
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    let random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    reamining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute(`disabled`);
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> start new Game</h2>`;

  startOver.appendChild(p);
  playGame = false;
  newGame();
  //
}

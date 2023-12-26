'use strict';

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const players = document.querySelector(".player");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const playerActive = document.querySelector(".player--active");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new")
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");


let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");


rollDiceBtn.addEventListener("click", playGame)

function playGame() {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `images/dice-${diceNum}.png`;
  
  if (diceNum !== 1) {
    currentScore += diceNum;
    if (player0El.classList.contains("player--active")) { 
      current0El.textContent = currentScore;
    } else {
      current1El.textContent = currentScore;
    }
  } else {
    if (player0El.classList.contains("player--active")) {
      player0El.classList.remove("player--active");
      player1El.classList.add("player--active");
      current0El.textContent = 0;
      currentScore = 0;
    } else {
      player1El.classList.remove("player--active");
      player0El.classList.add("player--active");
      current1El.textContent = 0;
      currentScore = 0;
    }
  }
}

holdBtn.addEventListener("click", function () {
  if (parseInt(score0El.textContent) >= 100) {
    player0El.classList.add("player--winner");
    rollDiceBtn.removeEventListener("click", playGame);
    diceEl.classList.add("hidden");
  } else if (parseInt(score1El.textContent) >= 100) {
    player1El.classList.add("player--winner");
    rollDiceBtn.removeEventListener("click", playGame);
    diceEl.classList.add("hidden");
  } else {
    if (player0El.classList.contains("player--active")) { 
      let score0 = parseInt(score0El.textContent);
      score0 += currentScore;
      score0El.textContent = score0;
      player0El.classList.remove("player--active");
      player1El.classList.add("player--active");
      current0El.textContent = 0;
      currentScore = 0;
    } else {
      let score1 = parseInt(score1El.textContent);
      score1 += currentScore;
      score1El.textContent = score1;
      player1El.classList.remove("player--active");
      player0El.classList.add("player--active");
      current1El.textContent = 0;
      currentScore = 0;
    }
  }
})

newBtn.addEventListener("click", function () {
  window.location.reload();
})
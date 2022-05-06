"use strict";

let secretNumber = Math.trunc(Math.random() * 21);
// document.querySelector(".mark").textContent = secretNumber;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    alert("Please write any number");
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!🤭";
      score--;
      document.querySelector(".scorePart").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!💥";
      document.querySelector(".scorePart").textContent = 0;
      document.querySelector("body").style.backgroundColor =
        "hsl(0deg 93% 38%)";
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!😆";
      score--;
      document.querySelector(".scorePart").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!💥";
      document.querySelector(".scorePart").textContent = 0;
      document.querySelector("body").style.backgroundColor =
        "hsl(0deg 93% 38%)";
    }
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You Win 🥳!";

    document.querySelector(".mark").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(24, 169, 24)";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highPart").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgb(39, 39, 39)";
  score = 20;
  document.querySelector(".scorePart").textContent = score;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector(".mark").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});

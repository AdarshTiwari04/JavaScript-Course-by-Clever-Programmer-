/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const cmpchoices = ["Rock", "Paper", "Scissors"];
  randomchoice = Math.floor(Math.random() * 3);
  return cmpchoices[randomchoice];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score
  let score;
  if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    score = 1;
  } else if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Scissors" && computerChoice == "Rock") ||
    (playerChoice == "Paper" && computerChoice == "Scissors")
  ) {
    score = -1;
  } else if (
    (playerChoice == "Rock" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Paper")
  ) {
    score = 0; // The More Optimal condition would be just { if (playerChoice === computerChoice) }
  }
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const result = document.getElementById("result");
  const plr_score = document.getElementById("player-score");
  const hands = document.getElementById("hands");
  if (score == -1) {
    result.innerText = `You Lose!`;
  } else if (score == 1) {
    result.innerText = `You Win!`;
  } else if (score == 0) {
    result.innerText = `It's a Draw!`;
  }
  plr_score.innerText = `${Number(plr_score.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const cmp_choice = getComputerChoice();
  const result = getResult(playerChoice, cmp_choice);
  showResult(result, playerChoice, cmp_choice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rps_buttons = document.querySelectorAll(".rpsButton");
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  rps_buttons.forEach((button) => {
    button.onclick = () => {
      onClickRPS(button.value);
    };
  });

  let clear = document.getElementById("endGameButton");
  clear.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let result = document.getElementById("result");
  let plr_score = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  result.innerText = "";
  plr_score.innerText = "";
  hands.innerText = "";
}

playGame();

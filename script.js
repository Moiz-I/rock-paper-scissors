let playerScore = 0;
let computerScore = 0;
let roundWinner = 0;
let round = 0
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

const pchoice = document.getElementById("pmove");
const cchoice = document.getElementById("cmove");
const result = document.querySelector(".result > p");
const playerScoreboard = document.getElementById("user-score")
const computerScoreboard = document.getElementById("computer-score")

function computerMove() {
  let num = Math.floor(Math.random() * 3);
  console.log(num);
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function game(cmove, pmove) {
  pchoice.src="images/"+String(pmove)+".png";
  cchoice.src="images/"+String(cmove)+".png";
  
  if (cmove == pmove) {
    roundWinner = "tie";
  } else if (pmove == "rock") {;
    if (cmove == "paper") {
      roundWinner = "computer";
      msg = "paper beats rock, computer wins"
      computerScore++;
    } else {
      roundWinner = "player";
      msg = "rock beats paper, player wins"
      playerScore++;
    }
  } else if (pmove == "paper") {
    if (cmove == "rock") {
      roundWinner = "player";
      msg = "rock beats paper, player wins"
      playerScore++;
    } else {
      roundWinner = "computer";
      msg = "paper beats rock, computer wins"
      computerScore++;
    }
  } else {
    if (cmove == "rock") {
      roundWinner = "computer";
      computerScore++;
    } else {
      roundWinner = "player";
      playerScore++;
    }
  }
  if (roundWinner === "computer") {
    result.textContent = "Computer Wins!";
  }
  else if (roundWinner === "player") {
    result.textContent = "Player Wins!";
  }
  else {
    result.textContent = "It's a Tie!";
  }
  playerScoreboard.textContent = playerScore
  computerScoreboard.textContent = computerScore

}


function main() {
  rock.addEventListener('click', () => game(computerMove(), "rock"));
  paper.addEventListener('click', () => game(computerMove(), "paper"));
  scissors.addEventListener('click', () => game(computerMove(), "scissors"));
}

main();
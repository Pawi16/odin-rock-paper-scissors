function computerPlay() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection === "rock") {
    if (computerSelection === "Rock") {
      return "Tie";
    }
    else if (computerSelection === "Paper") {
      return "You Lose! Paper Beats Rock";
    }
    else if (computerSelection === "Scissors") {
      return "You Win! Rock Beats Scissors";
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "Rock") {
      return "You Win! Paper Beats Rock";
    }
    else if (computerSelection === "Paper") {
      return "Tie";
    }
    else if (computerSelection === "Scissors") {
      return "You Lose! Scissors Beats Paper";
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "Rock") {
      return "You Lose! Rock Beats Scissors";
    }
    else if (computerSelection === "Paper") {
      return "You Win! Scissors Beats Paper";
    }
    else if (computerSelection === "Scissors") {
      return "Tie";
    }
  }
  else {
    return;
  }
}


function playGame(e) {

  let playerSelection = e.target.className;
  let computerSelection = computerPlay();
  const resultText = playRound(playerSelection, computerSelection);
  const resultDiv = document.createElement('div');
  resultDiv.textContent = resultText;
  body.appendChild(resultDiv);
  if (resultText === "You Win! Rock Beats Scissors" || resultText === "You Win! Paper Beats Rock" || resultText === "You Win! Scissors Beats Paper") {
    playerScore += 1;
  }
  else if (resultText === "You Lose! Paper Beats Rock" || resultText === "You Lose! Scissors Beats Paper" || resultText === "You Lose! Rock Beats Scissors") {
    computerScore += 1;
  }
  console.log(playerScore);
  console.log(computerScore);

  if (playerScore === 5 || computerScore === 5) {
    rockButton.removeEventListener('click', playGame);
    paperButton.removeEventListener('click', playGame);
    scissorsButton.removeEventListener('click', playGame);
  }
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const body = document.querySelector('.body');




let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);





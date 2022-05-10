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



function checkWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Result : You Win!";
  }
  else if (playerScore < computerScore) {
    return "Result : You Lose";
  }
  else {
    return "Result : Tie";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock ,Paper or Scissors", "");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    if (playRound(playerSelection, computerSelection) === "You Win! Rock Beats Scissors" || playRound(playerSelection, computerSelection) === "You Win! Paper Beats Rock" || playRound(playerSelection, computerSelection) === "You Win! Scissors Beats Paper") {
      playerScore += 1;
    }
    else if (playRound(playerSelection, computerSelection) === "You Lose! Paper Beats Rock" || playRound(playerSelection, computerSelection) === "You Lose! Scissors Beats Paper" || playRound(playerSelection, computerSelection) === "You Lose! Rock Beats Scissors") {
      computerScore += 1;
    }
   
  }
  console.log(checkWinner(playerScore, computerScore));
}
game();



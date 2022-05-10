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

function calcScore(playRound){
  if(playRound === "You Win! Rock Beats Scissors"||playRound === "You Win! Paper Beats Rock"||playRound === "You Win! Scissors Beats Paper"){
    return 1;
  }
  else{
    return 0;
  }
}

function game() {
  let score = 0;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock ,Paper or Scissors", "");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    score += calcScore(playRound(playerSelection, computerSelection));
  }
}
game();


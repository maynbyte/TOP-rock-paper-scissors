humanScore = 0;
computerScore = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getHumanChoice = () => {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return choice;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
};

const playGame = () => {
  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(`Round ${round}: ${result}`);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, the computer wins overall. Better luck next time!");
  } else {
    console.log("It's an overall tie!");
  }
};

playGame();

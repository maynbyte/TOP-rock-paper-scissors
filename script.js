// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;
let isGameStarted = false;

// DOM Elements
const startButton = document.getElementById("start-game");
const choicesContainer = document.getElementById("choices");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");

// Hide choice initially
choicesContainer.style.display = "none";

// Function to get computer's random choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Function to play a single round and determine the winner
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

// Update display function
function updateDisplay(humanChoice, computerChoice, result) {
  playerChoiceDisplay.textContent = humanChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

// Event listener for start button
startButton.addEventListener("click", () => {
  if (!isGameStarted) {
    isGameStarted = true;
    choicesContainer.style.display = "block";
    startButton.style.display = "none";
  }
});

// Choice buttons event listeners
document.querySelectorAll(".choice-btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (!isGameStarted) return;

    const humanChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateDisplay(humanChoice, computerChoice, result);

    // Check for game end (first to 5 points)
    if (humanScore === 5 || computerScore === 5) {
      const winner = humanScore === 5 ? "You" : "Computer";
      resultDisplay.textContent = `Game Over! ${winner} won the game!`;
      choicesContainer.style.display = "none";
      startButton.style.display = "block";
      startButton.textContent = "Play Again";

      // Reset scores for next game
      humanScore = 0;
      computerScore = 0;
      isGameStarted = false;
    }
  });
});

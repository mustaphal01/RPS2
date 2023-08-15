// Global variables to keep track of the player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to get a random choice for the computer (rock, paper, or scissors)
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choice.length);
    return choice[randIndex];
}

// Function to handle a single round of the game
function singleRound(playerSelection) {
    // Get the computer's choice
    const computerSelection = getComputerChoice();

    // Compare the player's selection with the computer's selection to determine the winner
    if (playerSelection === computerSelection) {
        // Display a message for a draw
        displayResult("It's a draw! Both of you chose " + playerSelection);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        // If the player wins, increment the player score and display a message
        playerScore++;
        displayResult("You won this round! " + playerSelection + " beats " + computerSelection);
    } else {
        // If the computer wins, increment the computer score and display a message
        computerScore++;
        displayResult("You lost this round! " + computerSelection + " beats " + playerSelection);
    }

    // Update the displayed scores and check if either player has won the game
    updateScore();
    checkWinner();
}

// Function to display the game result message in the results div
function displayResult(message) {
    const resultsDiv = document.getElementById("results");
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = message;
    resultsDiv.appendChild(resultParagraph);
}

// Function to update the displayed scores in the DOM
function updateScore() {
    document.getElementById("player-score").textContent = "Your Score: " + playerScore;
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;
}

// Function to check if either player has won the game
function checkWinner() {
    if (playerScore >= 5) {
        // Display a message if the player wins the game
        displayResult("Congratulations! You won the game!");
        // Disable the buttons to prevent further rounds
        disableButtons();
    } else if (computerScore >= 5) {
        // Display a message if the computer wins the game
        displayResult("Sorry! You lost the game!");
        // Disable the buttons to prevent further rounds
        disableButtons();
    }
}

// Function to disable the buttons once the game is over
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Event listeners for the buttons to trigger a single round when clicked
document.getElementById("rock").addEventListener("click", function() {
    singleRound("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    singleRound("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    singleRound("scissors");
});

// ... Existing JavaScript code ...

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear result messages
    updateScore(); // Reset displayed scores
    enableButtons(); // Re-enable the buttons
}

// Function to enable the buttons
function enableButtons() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

// Event listener for the "Reset Game" button
document.getElementById("reset").addEventListener("click", resetGame);


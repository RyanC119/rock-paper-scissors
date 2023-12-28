// Create an empty variable to hold the computer's choice
// Generate a random number between 1-3 inclusive
// Assigning rock/paper/scissors to the empty variable
// Return as the computer's choice as a string

function getComputerChoice() {
    let computerChoice;
    let randomNum = Math.floor(Math.random() * 3) + 1

    if (randomNum === 1) {
        computerChoice = 'ROCK';
    } else if (randomNum === 2) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS';
    }

    return computerChoice;
}


// When the user clicks a button:
// Store their choice in the playerSelection variable as an UPPERCASE string
let playerSelection = '';
let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        playerSelection = buttons[i].textContent.toUpperCase();
        console.log(playerSelection);
    });
}


// Pass the playerSelection variable and the computerSelection function to a new function

function playRound(playerSelection, computerSelection) {
    let roundResult = '';
    // Compare playerSelection to computerSelection:
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            roundResult = 'It\'s a tie!';
            console.log(roundResult);
            return roundResult;
        } else if (computerSelection === "PAPER") {
            roundResult = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            console.log(roundResult);
            return roundResult;
        } else {
            roundResult = `Winner Winner Chicken Dinner! ${playerSelection} beats ${computerSelection}!`;
            console.log(roundResult);
            return roundResult;
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "PAPER") {
            roundResult = 'It\'s a tie!';
            console.log(roundResult);
            return roundResult;
        } else if (computerSelection === "SCISSORS") {
            roundResult = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            console.log(roundResult);
            return roundResult;
        } else {
            roundResult = `Winner Winner Chicken Dinner! ${playerSelection} beats ${computerSelection}!`;
            console.log(roundResult);
            return roundResult;
        }
    } else {
        if (computerSelection === "SCISSORS") {
            roundResult = 'It\'s a tie!';
            console.log(roundResult);
            return roundResult;
        } else if (computerSelection === "ROCK") {
            roundResult = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            console.log(roundResult);
            return roundResult;
        } else {
            roundResult = `Winner Winner Chicken Dinner! ${playerSelection} beats ${computerSelection}!`;
            console.log(roundResult);
            return roundResult;
        }
    }
}

    // Rock beats scissors, scissors beats paper, paper beats rock
    /// console.log "You Lose! _____ beats _____!"
    // In the case of a tie, clear out the playerSelection variable and ask the player to choose again
    // console.log "tie!"
    // Return the results of the game

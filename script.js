// Create an empty variable to hold the computer's choice
// Generate a random number between 1-3 inclusive
// Assigning rock/paper/scissors to the empty variable
// Return as the computer's choice as a string

function getComputerChoice() {
    let computerChoice;
    let randomNum = Math.floor(Math.random() * 3) + 1

    if (randomNum === 1) {
        computerChoice = 'Rock';
    } else if (randomNum === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}
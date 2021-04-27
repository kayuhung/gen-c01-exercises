const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else if (userInput == 'bomb') {
        return 'You Won!'
    } else {
        return 'Error!'
    }
}
console.log(getUserChoice('rock'));

const getComputerChoice = () => {
    let computerNumber = Math.floor(Math.random() * 3)
    if (computerNumber == 0) {
        return 'rock'
    } else if (computerNumber == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }

}

console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    } else if (userChoice == 'bomb') {
        return 'You won!';
    }
    if (userChoice == 'rock' && computerChoice == 'paper') {
        return 'The computer won!';
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        return 'You won!';
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        return 'You won!';
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        return 'The computer won!';
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        return 'The computer won!';
    } else {
        return 'You won!';
    }

}
console.log(determineWinner('paper', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();

getUserChoice('bomb');
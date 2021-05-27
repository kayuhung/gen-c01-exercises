let userChoice = 'paper';

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case 'rock':
            userInput = userInput;
            break;
        case 'paper':
            userInput = userInput;
            break
        case 'scissors':
            userInput = useInput;
            break
        case 'bomb':
            console.log(`RESULT: player won`);
            ProcessingInstruction.exit(1);
        default:
            userInput = 'WRONG INPUT. Please input "rock", "paper", "scissors".'
    }
    return userInput;
};

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    let choices = {
        0: "rock",
        1: "paper",
        2: "scissors"
    }
    return choices[computerChoice];
};

const determineWinner = (player, computer) => {
    let playerResult = "";
    let choicesValue = {
        "rock": 0,
        "paper": 1,
        "scissors": 2
    }
    let testingValue = choiceValue[player] - choiceValue[computer]

    // condition checking:
    // console.log(`${testingValue} = ${choicesValue[player]} - ${choicesValue[computer]}`)

    if (testingValue == 0) {
        playerResult = 'tied';
    } else if (testingValue == 1 || testingValue == (-2)) {
        playerResult = 'player won';
    } else if (testingValue == (-1) || testingValue == 2) {
        playerResult = 'player lost';
    }
    return playerResult;
};

let computer = getComputerChoice();
let player = getUserChoice(userChoice);
console.log(`player: ${player}`);
console.log(`computer: ${computer}`);
console.log(`RESULT: ${determineWinner(player, computer)}`);
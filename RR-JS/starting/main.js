const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        let fieldString = '';
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(''))
            this.field[i].forEach(elem => fieldString += elem);
            fieldString += '\n';
        }
        console.log(fieldString)
    }


};
const myField = new Field([
    ['*', '░', 'O', '░', '░'],
    ['░', 'O', '░', '░', 'O'],
    ['░', '^', '░', '░', '░'],
]);

function playGame() {
    myField.print();

    let userInput = prompt('which direction you’d like to move : ')
}
playGame()
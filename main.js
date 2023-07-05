const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let gameOver = false;

class Field {
  constructor(field) {
    this.field = field;
    this.x = 0;
    this.y = 0;
    this.playerPosition = [this.x, this.y];
    this.prevPosition = [this.x, this.y];
  }

  print() {
    for (let row of this.field) {
      console.log(row.join(' '));
    }
  }

  turnPrompt() {
    let turn = prompt(
      'Press r to move right. Press l to move left. Press d to move down. Press u to move up.'
    );
    switch (turn) {
      case 'r':
        this.playerPosition = [this.x, this.y + 1];
        break;
      case 'l':
        this.playerPosition = [this.x, this.y - 1];
        break;
      case 'u':
        this.playerPosition = [this.x - 1, this.y];
        break;
      case 'd':
        this.playerPosition = [this.x + 1, this.y];
        break;
    }
    //Check for out of bounds move
    if (
      this.playerPosition !== this.prevPosition &&
      this.field[this.playerPosition[0]][this.field[1]] === 'O'
    ) {
      gameOver = true;
    }

    //update field to reflect changes
    if (this.playerPosition !== this.prevPosition) {
      this.field[this.playerPosition[0]][this.field[1]] = '*';
      this.prevPosition = this.playerPosition;
    }
  }
}

//Instanciate the game below
const myField = new Field([
  [pathCharacter, fieldCharacter, hole],
  [hole, fieldCharacter, hole],
  [hole, fieldCharacter, hat],
]);

const playGame = () => {
  while (!gameOver) {
    //To remove infinite loop, I need to add the part of the game where you win or lose
    myField.print();
    myField.turnPrompt();
  }
};

playGame();

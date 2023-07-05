const prompt = require('prompt-sync')({ sigint: true });
const { generateField } = require('./generateField.js');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let gameOver = false;

class Field {
  constructor(field) {
    this.field = field;
    this.x = gameField[1];
    this.y = gameField[2];
    this.playerPosition = [this.x, this.y];
    this.prevPosition = [0, 0];
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
        this.y++;
        this.playerPosition = [this.x, this.y];
        break;
      case 'l':
        this.y--;
        this.playerPosition = [this.x, this.y];
        break;
      case 'u':
        this.x--;
        this.playerPosition = [this.x, this.y];
        break;
      case 'd':
        this.x++;
        this.playerPosition = [this.x, this.y];
        break;
    }
    //Check for out of bounds move
    if (
      this.x < 0 ||
      this.y < 0 ||
      this.x >= this.field.length ||
      this.y >= this.field.length
    ) {
      console.log('You have moved out of bounds!');
      gameOver = true;
    }

    //Are you in a hole?
    if (this.field[this.playerPosition[0]][this.playerPosition[1]] === 'O') {
      console.log('You have fallen into a hole!');
      gameOver = true;
    }

    if (this.field[this.playerPosition[0]][this.playerPosition[1]] === '^') {
      console.log('You found your hat congratulations!');
      gameOver = true;
    }

    //update field to reflect changes
    if (this.playerPosition !== this.prevPosition) {
      this.field[this.playerPosition[0]][this.playerPosition[1]] = '*';
      this.prevPosition = this.playerPosition;
    }
  }
}

//Instanciate the game below
const gameField = generateField(4);
const myField = new Field(gameField[0]);

const playGame = () => {
  while (!gameOver) {
    //To remove infinite loop, I need to add the part of the game where you win or lose
    myField.print();
    myField.turnPrompt();
  }
};

playGame();

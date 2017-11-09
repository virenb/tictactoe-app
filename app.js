let human;
let ai;
let winner;
let currentPlayer;
let gameOver = false;
let gameRunning = false;
let oButton = document.getElementById('oButton');
let xButton = document.getElementById('xButton');
let playButton = document.getElementById('play');
const squares = document.querySelectorAll('.square');
let squareKeys = Object.keys(squares);

const setO = () => {
  oButton.classList.add('btn-primary');
  xButton.disabled = true;
  oButton.disabled = false;
  human = 'O';
  ai = 'X';
  play();
};

const setX = () => {
  xButton.classList.add('btn-danger');
  xButton.disabled = false;
  oButton.disabled = true;
  human = 'X';
  ai = 'O';
  play();
};

const play = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', turn, false);
  }
};

const turn = (square) => {
  humanTurn(square);
};

function remove(array, element) {
  const index = array.indexOf(element);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

const humanTurn = (square) => {
  let id = square.target.id;
  if (squareKeys.includes(id)) {
    document.getElementById(square.target.id).innerText = human;
    remove(squareKeys, id);
    console.log(squareKeys);
  } else {
    console.log('pick another number');
  }

};

const clearSquares = () => {
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
};

const resetPick = () => {
  human = '';
  ai = '';
  xButton.disabled = false;
  oButton.disabled = false;
  xButton.classList.remove('btn-danger');
  oButton.classList.remove('btn-primary');
  squareKeys = Object.keys(squares);
};

const playAgain = () => {
  resetPick();
  clearSquares();
  play();
};

const checkWinner = (player) => {
  var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
};

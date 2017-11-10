let human;
let computer;
let winner;
let oButton = document.getElementById('oButton');
let xButton = document.getElementById('xButton');
let playButton = document.getElementById('play');
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let humanPicks = [];
let computerPicks = [];

let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const setO = () => {
  oButton.classList.add('btn-primary');
  xButton.disabled = true;
  oButton.disabled = false;
  human = 'O';
  computer = 'X';
};

const setX = () => {
  xButton.classList.add('btn-danger');
  xButton.disabled = false;
  oButton.disabled = true;
  human = 'X';
  computer = 'O';
};

const humanTurn = () => {
  document.getElementById(squareId).innerHTML = human;
  humanPicks.push(squareId);
  console.log('Human ' + humanPicks);
  checkHumanWin();
};

let sq0 = () => {
  squareId = 0;
  humanTurn();
};
document.getElementById('0').onclick = sq0;


let sq1 = () => {
  squareId = 1;
  humanTurn();
};
document.getElementById('1').onclick = sq1;

let sq2 = () => {
  squareId = 2;
  humanTurn();
};
document.getElementById("2").onclick = sq2;

let sq3 = () => {
  squareId = 3;
  humanTurn();
};
document.getElementById('3').onclick = sq3;

let sq4 = () => {
  squareId = 4;
  humanTurn();
};
document.getElementById('4').onclick = sq4;

let sq5 = () => {
  squareId = 5;
  humanTurn();
};
document.getElementById('5').onclick = sq5;

let sq6 = () => {
  squareId = 6;
  humanTurn();
};
document.getElementById('6').onclick = sq6;

let sq7 = () => {
  squareId = 7;
  humanTurn();
};
document.getElementById('7').onclick = sq7;

let sq8 = () => {
  squareId = 8;
  humanTurn();
};
document.getElementById('8').onclick = sq8;

const humanWinner = () => {
  for (var i = 0; i < winningCombos.length; i++) {
    var filteredPlayerArr = humanPicks.filter(x => winningCombos[i].includes(x));
    if (filteredPlayerArr.length === 3) {
      winner = 'human';
      document.getElementById('winner').innerText = 'You win!';
      console.log('Player wins.');
    }
  }
};

const checkHumanWin = () => {
  draw();
  humanWinner();
  if (winner === 'human') {
    playAgain();
  } else {
    computerTurn();
  }
};

const computerTurn = () => {
  let pick = board[Math.floor(Math.random() * board.length)];
  if (humanPicks.includes(pick) || computerPicks.includes(pick)) {
    computerTurn();
    console.log('CPU Picks ' + computerPicks);
  } else {
    computerPicks.push(pick);
    document.getElementById(pick).innerHTML = computer;
    console.log('CPU Picks ' + computerPicks);
    checkComputerWin();
  }
};

const computerWinner = () => {
  for (var i = 0; i < winningCombos.length; i++) {
    var filteredCompArr = computerPicks.filter(b => winningCombos[i].includes(b));
    if (filteredCompArr.length === 3) {
      winner = 'computer';
      document.getElementById('winner').innerText = 'Computer wins.';
      console.log('Computer wins.');
    }
  }
};

const checkComputerWin = () => {
  draw();
  computerWinner();
  if (winner === 'computer') {playAgain();}
};

function draw() {
  if ((computerPicks.length + humanPicks.length) === 9) {
    document.getElementById('winner').innerText = 'Draw';
    playAgain();
  }
}

const playAgain = () => {
  setTimeout(() => {
    document.getElementById('winner').innerText = '';
  }, 2000);
  human = '';
  computer = '';
  humanPicks = [];
  computerPicks = [];
  winner = '';
  xButton.disabled = false;
  oButton.disabled = false;
  xButton.classList.remove('btn-danger');
  oButton.classList.remove('btn-primary');
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
};

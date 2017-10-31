// change turn after each placement
// Make sure can only put one in a square and can't over write it
// End game if a player has won before board is file
// Display who's won
// Clear board and play again
// add color if win

var humanPlayer;
var aiPlayer;
var board;
var emptySquares = 9;
var gameRunning = false;
var turns = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var humanSquares = [];
var aiSquares = [];
var currentPlayer = humanPlayer;
var empty = "";
var i;
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

function pickO() {
  document.getElementById("oButton").classList.add("btn-primary");
  document.getElementById("xButton").disabled = true;
  humanPlayer = "O";
  aiPlayer = "X";
  playGame();
}

function pickX() {
  document.getElementById("xButton").classList.add("btn-danger");
  document.getElementById("oButton").disabled = true;
  humanPlayer = "X";
  aiPlayer = "O";
  playGame();
}

function reset() {
  document.getElementById("xButton").disabled = false;
  document.getElementById("oButton").disabled = false;
  document.getElementById("xButton").classList.remove("btn-danger");
  document.getElementById("oButton").classList.remove("btn-primary");
  humanPlayer = "";
  aiPlayer = "";
  clearSquares();
  aiSquares = [];
  humanSquares = [];
  turns = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

function clearSquares() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
}

function humanTurn(square) {
  document.getElementById(square).innerText = humanPlayer;
  i = turns.indexOf(square);
  if (i > -1) {
    turns.splice(i, 1);
  }
  humanSquares.push(square);
  emptySquares--;
  console.log('square is' + " " + square);
  console.log('hu:' + '' + humanSquares);
  console.log("turns:" + " " + turns);
}

function aiTurn(square) {
  var aiMove = Math.floor(Math.random() * 8);
  if (aiMove === 0) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 1) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 2) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 3) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 4) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 5) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 6) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 7) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else if (aiMove === 8) {
    document.getElementById(aiMove).innerText = aiPlayer;
    i = turns.indexOf(aiMove);
    if (i > -1) {
      turns.splice(i, 1);
    }
  } else {
    console.log(hi);
  }
  aiSquares.push(aiMove);
  emptySquares--;

  console.log('ai:' + ' ' + aiSquares);
  console.log("turns:" + " " + turns);
}

function playGame() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(square) {
  humanTurn(square.target.id);
  aiTurn(square.target.id);

}


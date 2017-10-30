// Decide to play vs. self or AI
// Pick X or 0
// Able to place X or 0 in square
// change turn after each placement
// Make sure can only put one in a square and can't over write it
// End game if a player has won before board is file
// Display who's won
// Clear board and play again

var humanPlayer;
var aiPlayer;
var board;
var gameRunning = false;
var icons = ["O", "X"];
var turns = [];
var humanSquares = [];
var aiSquares = [];

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
}

function clearSquares() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
}

function turn(square) {
  document.getElementById(square).innerText = humanPlayer;
}

function playGame() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(square) {
  turn(square.target.id);
}




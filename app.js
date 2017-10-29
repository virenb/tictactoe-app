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
var gameRunning = false;
var icons = ['O', 'X'];

function pickO() {
  console.log('you are O');
  document.getElementById('oButton').classList.add("focus");
  document.getElementById('xButton').disabled = true;
}

function pickX() {
  console.log('you are X');
  document.getElementById('xButton').classList.add("focus");
  document.getElementById('oButton').disabled = true;
}
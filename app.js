var humanPlayer;
var aiPlayer;
var board;
var currentPlayer = humanPlayer;
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

var squares = document.querySelectorAll('.square');

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

function playGame() {
  board = Array.from(Array(9).keys());
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', turnClick, false);
  }
}

function turnClick(square) {
console.log(square.target.id);
}


function clearSquares() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
}

// function humanTurn(square) {
//   document.getElementById(square).innerText = humanPlayer;
//   i = turns.indexOf(parseInt(document.getElementById(square).id));
//   if (i > -1) {
//     turns.splice(i, 1);
//   }
//   humanSquares.push(square);
//   emptySquares--;
//   console.log('hu:' + ' ' + humanSquares);
// }

// function aiTurn(square) {
//   var aiMove = Math.floor(Math.random() * 8);
//   if (aiMove === 0) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 1) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 2) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 3) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 4) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 5) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 6) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 7) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else if (aiMove === 8) {
//     document.getElementById(aiMove).innerText = aiPlayer;
//     i = turns.indexOf(aiMove);
//     if (i > -1) {
//       turns.splice(i, 1);
//     }
//   } else {
//     console.log("hi");
//   }
//   aiSquares.push(aiMove);
//   emptySquares--;
//   console.log('ai:' + ' ' + aiSquares);
//   console.log("turns:" + " " + turns);
// }


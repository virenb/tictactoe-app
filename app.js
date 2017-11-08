// $(document).ready(function () {

//   var human;
//   var ai;
//   var winner;
//   var board = ["", "", "", "", "", "", "", "", ""];
//   var currentPlayer;

//   $("#oButton").click(function() {
//     $(this).addClass("btn-primary");
//     $("#xButton").attr("disabled", true);
//     human = "O";
//     ai = "X";
//     //playGame();
//   });

//   $("#xButton").click(function () {
//     $(this).addClass("btn-danger");
//     $("#oButton").attr("disabled", true);
//     human = "X";
//     ai = "O";
//     //playGame();
//   });

//   $("#play").click(function() {
//     $("#oButton").attr("disabled", false);
//     $("#xButton").attr("disabled", false);
//     $("#oButton").removeClass("btn-primary");
//     $("#xButton").removeClass("btn-danger");
//     human = "";
//     ai = "";
//     board = ["", "", "", "", "", "", "", "", ""];
//   });

//   $('.square').click(function(event) {
//     playerTurn(event);
//   });

//   // function playerTurn(event) {
//   //   var position = $(event.target).attr('id');
//   //   console.log(position);
//   //   if (board[position] !== "") {
//   //     console.log('hi');
//   //   } else if (board[position] === "") {
//   //     board[position] = human;
//   //     $('.square[position]').text(human);
//   // }}


// });

let human;
let ai;
let winner;
let currentPlayer;
let oButton = document.getElementById('oButton');
let xButton = document.getElementById('xButton');
let playButton = document.getElementById('play');

const setO = () => {
  oButton.classList.add('btn-primary');
  xButton.disabled = true;
  oButton.disabled = false;
  human = 'O';
  ai = 'X';
};

const setX = () => {
  xButton.classList.add('btn-danger');
  xButton.disabled = false;
  oButton.disabled = true;
  human = 'X';
  ai = 'O';
};

const squares = document.querySelectorAll('.square');

const clearSquares = () => {
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
};

const playAgain = () => {
  clearSquares();
  resetPick();
}

oButton.addEventListener("click", setO);
xButton.addEventListener("click", setX);
playButton.addEventListener("click", playAgain);


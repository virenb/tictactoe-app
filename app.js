$(document).ready(function () {

  var human;
  var ai;
  var winner;
  var board = ["", "", "", "", "", "", "", "", ""];
  var currentPlayer;

  $("#oButton").click(function() {
    $(this).addClass("btn-primary");
    $("#xButton").attr("disabled", true);
    human = "O";
    ai = "X";
    //playGame();
  });

  $("#xButton").click(function () {
    $(this).addClass("btn-danger");
    $("#oButton").attr("disabled", true);
    human = "X";
    ai = "O";
    //playGame();
  });

  $("#play").click(function() {
    $("#oButton").attr("disabled", false);
    $("#xButton").attr("disabled", false);
    $("#oButton").removeClass("btn-primary");
    $("#xButton").removeClass("btn-danger");
    human = "";
    ai = "";
    board = ["", "", "", "", "", "", "", "", ""];
  });

  $('.square').click(function(event) {
    playerTurn(event);
  });

  // function playerTurn(event) {
  //   var position = $(event.target).attr('id');
  //   console.log(position);
  //   if (board[position] !== "") {
  //     console.log('hi');
  //   } else if (board[position] === "") {
  //     board[position] = human;
  //     $('.square[position]').text(human);
  // }}


});


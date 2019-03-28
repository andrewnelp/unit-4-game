$(function() {

// create variables
var mNumber;
var randomNum;
var wins = 0;
var losses = 0;
var totalScore = 0;
var one;
var two;
var three;
var four;
var arr = [one, two, three, four]


// create a startGame function
function startGame() {
one = getRandom(1, 12);
two = getRandom(1, 12);
three = getRandom(1, 12);
four = getRandom(1, 12);
mNumber = getRandom(19, 120);
$('#mNum').text(mNumber);
$('#wins').text(wins)
$('#losses').text(losses)
$('#totScore').text(totalScore)
}

startGame();

// create on click events for one, two...and find totalScore sum
// Main Game
$('img').on('click dblclick', function(){
  for (var i = 0; i < arr.length; i++) {
    totalScore += arr[i];
    $('#totScore').text(totalScore)
  }
});




// create Math random function

  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

// set logic for your Total Score id='totScore'

// create if else for Match the number and Total Score

//create animations when game is win and lost



});
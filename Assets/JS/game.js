$(function() {

// create variables
var mNumber;
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
var one;
var two;
var three;
var four;
var res = $('#result');
var audioElement = document.createElement("audio");
  var arr = [];
  var iCrystal = $("img");
  
// create a startGame function
function startGame() {
one = getRandom(1, 12);
two = getRandom(1, 12);
three = getRandom(1, 12);
four = getRandom(1, 12);
arr = [one, two, three, four];
  console.log(arr);
mNumber = getRandom(19, 120);
$('#mNum').text(mNumber);
$('#wins').text(wins);
$('#losses').text(losses);
// document. querySelector('#wins').dataset.winScore = wins;
// document.querySelector('#losses').dataset.lossesScore = losses;
totalScore = 0
$('#totScore').text(totalScore);
}

startGame();

  // create Math random function

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// create on click events for one, two...and find totalScore sum
// Main Game - the problem is that it data referes to the last array i and array never updates
function dataAttr(){
  for (var i = 0; i < arr.length; i++) {
    //set data attr to each image
    iCrystal.attr('data-crystalvalue', arr[i]);
  }
  return iCrystal;
}
  dataAttr();



  iCrystal.on('click', function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    var crystalValueParse = parseInt(crystalValue);
    $(this).animate({ width: '+=2px', opacity: '0.5' }, 200);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 200);
    totalScore += crystalValueParse;
    $('#totScore').text(totalScore);
    logic();
  })

  // set logic for your Total Score id='totScore'
  function logic(){
    if (totalScore == mNumber) {
      wins = wins + 1;
      res.text('You Win!').css('color', 'white').animate({ opacity: "0.01" }, 1000).animate({ opacity: "1", fontSize: "2rem"}, 1000);
      audioElement.setAttribute("src", "Assets/Sound/splits.mp3")
      audioElement.play();
      startGame();
    }
    else if (totalScore > mNumber) {
      losses++;
      res.text('You Lose!').css('color', 'red').animate({ opacity: "0.01" }, 1000).animate({ opacity: "1", fontSize: "2rem"}, 1000);
      audioElement.setAttribute("src", "Assets/Sound/suspension.mp3")
      audioElement.play();
      startGame();
    }
  }

});
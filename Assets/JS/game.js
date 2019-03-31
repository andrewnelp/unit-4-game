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
var iCrystal = $('img');
  
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


  $('#img1').on('click', function() {
    var crystalValue = arr[0];
    
    // crystalValue = parseInt(crystalValue);
    $(this).animate({ width: '+=2px', opacity: '0.5' }, 200);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 200);
    totalScore += crystalValue;
    $('#totScore').text(totalScore);
    logic();
  })
  $('#img2').on('click', function() {
    var crystalValue = arr[1];
    
    // crystalValue = parseInt(crystalValue);
    $(this).animate({ width: '+=2px', opacity: '0.5' }, 200);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 200);
    totalScore += crystalValue;
    $('#totScore').text(totalScore);
    logic();
  })
  $('#img3').on('click', function() {
    var crystalValue = arr[2];
    
    // crystalValue = parseInt(crystalValue);
    $(this).animate({ width: '+=2px', opacity: '0.5' }, 200);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 200);
    totalScore += crystalValue;
    $('#totScore').text(totalScore);
    logic();
  })
  $('#img4').on('click', function() {
    var crystalValue = arr[3];
    
    // crystalValue = parseInt(crystalValue);
    $(this).animate({ width: '+=2px', opacity: '0.5' }, 200);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 200);
    totalScore += crystalValue;
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
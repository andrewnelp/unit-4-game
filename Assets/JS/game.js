$(function() {

// create variables
var mNumber;
// var randomNum;
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
var one;
var two;
var three;
var four;
var res = $('#result');
var audioElement = document.createElement("audio");
      var arr = [getRandom(1, 12), getRandom(1, 12), getRandom(1, 12), getRandom(1, 12)];
      console.log(arr)

// create a startGame function
function startGame() {
one = getRandom(1, 12);
two = getRandom(1, 12);
three = getRandom(1, 12);
four = getRandom(1, 12);
mNumber = getRandom(19, 120);
$('#mNum').text(mNumber);
$('#wins').text(wins);
$('#losses').text(losses);
// document. querySelector('#wins').dataset.winScore = wins;
// document.querySelector('#losses').dataset.lossesScore = losses;
totalScore = 0
$('#totScore').text(totalScore);
  // $('#result').fadeIn('slow');  
}

startGame();

// create on click events for one, two...and find totalScore sum
// Main Game
// for (var i = 0; i < arr.length; i++) {
//   var iCrystal = $("img");
//     //set data attr to each image
//   iCrystal.attr('data-crystalvalue', arr[i]);
// }

//   iCrystal.on('click', function() {
//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // $(this).animate({ width: '+=5px', opacity: '0.7' }, 300);
//     // $(this).animate({ width: '-=5px', opacity: '1.0' }, 300);
//     totalScore += crystalValue;
//     $('#totScore').text(totalScore);
    
//     if (totalScore == mNumber) {
//       wins++;
//       document.querySelector('#wins').dataset.winScore = wins;
//     }
//     else if (totalScore > mNumber) {
//       losses++;
//       alert('you lose');
//     }
//   })

  // set logic for your Total Score id='totScore'
  function logic(){
    if (totalScore == mNumber) {
      wins = wins + 1;
      res.text('You Win!').css('color', 'white').animate({ opacity: "0.1" }, 1000).animate({ opacity: "1" }, 1000);
      audioElement.setAttribute("src", "Assets/Sound/splits.mp3")
      audioElement.play();
      startGame();
    }
    else if (totalScore > mNumber) {
      losses++;
      res.text('You Lose!').css('color', 'red').animate({ opacity: "0.1" }, 1000).animate({ opacity: "1" }, 1000);
      audioElement.setAttribute("src", "Assets/Sound/suspension.mp3")
      audioElement.play();
      startGame();
    }
  }

  $('img').eq(0).on('click dblclick', function () {
    $(this).animate({ width: '+=2px', opacity: '0.7' }, 300);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 300);
    logic()
    totalScore += one;
    $('#totScore').text(totalScore);
  })
  

  $('img').eq(1).on('click dblclick', function(){
    $(this).animate({ width: '+=2px', opacity: '0.7' }, 300);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 300);
    logic()
  totalScore += two;
  $('#totScore').text(totalScore);
})

  $('img').eq(2).on('click dblclick', function(){
    $(this).animate({ width: '+=2px', opacity: '0.7' }, 200);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 200);
    logic()
  totalScore += three;
  $('#totScore').text(totalScore);
})

  $('img').eq(3).on('click dblclick', function(){
    $(this).animate({ width: '+=2px', opacity: '0.7' }, 300);
    $(this).animate({ width: '-=2px', opacity: '1.0' }, 300);
    logic()
  totalScore += four;
  $('#totScore').text(totalScore);
})

// create Math random function

  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

//create animations when game is win and lost

});
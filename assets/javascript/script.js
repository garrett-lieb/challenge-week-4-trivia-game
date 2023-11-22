var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");

var questionElement = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var rootEl = $("#answer-feedback");

var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");

var scores = document.querySelector("#scores");

var chosenAnswer = "";
var Highscores = "";
var isWin = false;
var timer;
var timerCount;


// array of questions


// array of answers


startButton.addEventListener("click", startGame);

function startGame() {
    isWin = false;
    isLoss = false;
    timerCount = 5;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    // load questions
    // load answers
    startTimer()
  }

  
// create timer function
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount + " seconds left";
      if (timerCount === 1) {
        timerElement.textContent = timerCount + " second left";
      }
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        timerElement.textContent = "You ran out of time :(";
        // Clears interval
        clearInterval(timer);
      }
    }, 1000); 
  }


// check win


// check loss


// if answer if correct display correct


// if answer is correct display next quesion in array


// if answer is incorrect display incorrect and subtract 10 seconds from timer


// if all questions are answered end game



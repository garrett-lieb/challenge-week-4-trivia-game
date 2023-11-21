var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");

var questionElement = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");


var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");
var answerfeedback = document.querySelector("#answer-feedback");

var scores = document.querySelector("#scores");

var chosenAnswer = "";
var highscores = "";
var isWin = false;
var timer;
var timerCount;



startButton.addEventListener("click", startGame);

function startGame() {
    isWin = false;
    timerCount = 5;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
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
          winGame();
          getInitials();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        timerElement.textContent = "You ran out of time :(";
        // Clears interval
        clearInterval(timer);
        loseGame();
        getInitials();
      }
    }, 1000); 
  }

// if end game display score and prompt to enter initials
// if initials are entered display highscores with local storage

function winGame() {
}

function loseGame() {
}

function getInitials() {
    prompt("Enter your initials");
}
  




// create array of questions 
// create array of answers
// create array of correct answers
// create array of incorrect answers
// Creates blanks on screen
function renderBlanks() {
    // Randomly picks word from words array
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blanksLetters = []
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
      blanksLetters.push("_");
    }
    // Converts blankLetters array into a string and renders it on the screen
    wordBlank.textContent = blanksLetters.join(" ")
  }



// if answer if correct display correct


// if answer is correct display next quesion in array


// if answer is incorrect display incorrect and subtract 10 seconds from timer


// if all questions are answered end game



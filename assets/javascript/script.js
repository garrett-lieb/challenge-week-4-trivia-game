var scores = document.querySelector(".scores");
var questionElement = document.querySelector(".question");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var answerfeedback = document.querySelector(".answer-feedback");
var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var chosenAnswer = "";
var highscores = "";
var winCounter = 0;
var loseCounter = 0;
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
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        timerElement.textContent = "You ran out of time :(";
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
// create array of questions 
// create array of answers
// create array of correct answers
// create array of incorrect answers

[
    question: "Commonly used data types DO NOT include:",
    answer1: 
    answer2:
    answer3:
    answer4:
]

[
    question: "The condition in an if / else statement is enclosed within ____.",
    answer1: 
    answer2:
    answer3:
    answer4:
]

[
    question: "Arrays in JavaScript can be used to store ____.",
    answer1: 
    answer2:
    answer3:
    answer4:
]

[
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answer1: 
    answer2:
    answer3:
    answer4:
]

[
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: 
    answer2:
    answer3:
    answer4:
]


// create question fucntion

    // get questions from array
    // display questions



// if answer if correct display correct


// if answer is correct display next quesion in array


// if answer is incorrect display incorrect and subtract 10 seconds from timer





// if all questions are answered end game


// if end game display score and prompt to enter initials


// if initials are entered display highscores with local storage
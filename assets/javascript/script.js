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

var chosenQuestion = "";
var chosenAnswer = "";
var Highscores = "";
var isWin = false;
var timer;
var timerCount;


// array of questions
var questions =
[   "Commonly used data types DO NOT include:",
    "The condition in an if / else statement is enclosed within ____.",
    "Arrays in JavaScript can be used to store ____.",
    "String values must be enclosed within ____ when being assigned to variables.",
    "Contorl flow is the order in which ____ are executed or evaluated when a program is run." 
]

startButton.addEventListener("click", startGame);

function startGame() {
    isWin = false;
    isLoss = false;
    timerCount = 5;
    startTimer()
     // load questions //load answers 
    renderBlanks();
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true; 
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

  function renderBlanks() {
    // Randomly picks word from words array
    chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < questions.length; i++) {
      console.log(chosenQuestion);
      question.textContent=chosenQuestion
    }
    if (chosenQuestion === questions[0]) {
        answer1.textContent = "boolean";
        answer2.textContent = "number";
        answer3.textContent = "algorithm";
        answer4.textContent = "string";
    }
    if (chosenQuestion === questions[1]) {
        answer1.textContent = "''";
        answer2.textContent = "{}";
        answer3.textContent = "[]";
        answer4.textContent = "()";
    }
    if (chosenQuestion === questions[2]) {
        answer1.textContent = "a list of values";
        answer2.textContent = "a list of variables";
        answer3.textContent = "a list of strings";
        answer4.textContent = "a list of groceries";
    }
    if (chosenQuestion === questions[3]) {
        answer1.textContent = "double quotes";
        answer2.textContent = "single or double quotes";
        answer3.textContent = "single quotes";
        answer4.textContent = "brackets";
    }
    if (chosenQuestion === questions[4]) {
        answer1.textContent = "algorithms";
        answer2.textContent = "boolean values";
        answer3.textContent = "arrays, variables, and strings";
        answer4.textContent = "individual statements, instructions or function calls";
    }
  }

  function checkAnswer {
        if (chosenQuestion === questions[0] && chosenAnswer === answer1) {
            console.log("correct");
        }
  }

// check win


// check loss


// if answer if correct display correct


// if answer is correct display next quesion in array


// if answer is incorrect display incorrect and subtract 10 seconds from timer


// if all questions are answered end game



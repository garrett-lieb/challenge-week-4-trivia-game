var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");

var questionElement = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var answerfeedback = document.querySelector("#answer-feedback");
var currentscore = document.querySelector("#currentscore");

var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");

var Highscores = document.querySelector("#Highscores");

var currentscore = 0;
var chosenQuestion = "";
var chosenAnswer = "";
var Highscores = "";
var initials = "";
var isWin = false;
var isLoss = false;
var timer;
var timerCount;


// array of questions
var questions =
[   "Commonly used data types DO NOT include:",
    "The condition in an if / else statement is enclosed within ____.",
    "Arrays in JavaScript can be used to store all except:",
    "String values must be enclosed within ____ when being assigned to variables.",
    "Contorl flow is the order in which ____ are executed or evaluated when a program is run." 
]

startButton.addEventListener("click", startGame);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

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
        getInitials();
        clearInterval(timer);
        console.log(initials + currentscore);
        
        
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


  function checkAnswer() {
      if (chosenQuestion === questions[0] && chosenAnswer === answer3) {
    // if answer is correct display correct and load next question
          console.log("correct");
          answerfeedback.textContent = "correct";
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[0] && chosenAnswer === answer1 || answer2 || answer4) {
    // if answer is correct display correct and load next question
              console.log("incorrect");
              timerCount = timerCount - 10;
      }}

      if (chosenQuestion === questions[1] && chosenAnswer === answer2) {
          console.log("correct");
          answerfeedback.textContent = "correct";
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[1] && chosenAnswer === answer1 || answer3 || answer4) {
              console.log("incorrect");
              answerfeedback.textContent = "incorrect";
              timerCount = timerCount - 10;
      }}

      if (chosenQuestion === questions[2] && chosenAnswer === answer4) {
          console.log("correct");
          answerfeedback.textContent = "correct";
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[2] && chosenAnswer === answer1 || answer2 || answer3) {
              console.log("incorrect");
              answerfeedback.textContent = "incorrect";
              timerCount = timerCount - 10;
      }}

      if (chosenQuestion === questions[3] && chosenAnswer === answer2) {
          console.log("correct");
          answerfeedback.textContent = "correct";
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[3] && chosenAnswer === answer1 || answer3 || answer4) {
              console.log("incorrect");
              answerfeedback.textContent = "incorrect";
              timerCount = timerCount - 10;
      }}
      
      if (chosenQuestion === questions[4] && chosenAnswer === answer4) {
          console.log("correct");
          answerfeedback.textContent = "correct";
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[4] && chosenAnswer === answer1 || answer2 || answer3) {
              console.log("incorrect");
              answerfeedback.textContent = "incorrect";
              timerCount = timerCount - 10;
      }}
    }

  

// if timer runs out display game over

// if all questions are answered display game over

// if game ends prompt to enter initials and save score to local storage
function getInitials() {
  prompt("Enter your initials");
      }
    
// if initials are entered display highscores with local storage












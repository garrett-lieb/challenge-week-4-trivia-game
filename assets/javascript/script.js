var timerElement = document.querySelector("#timer-count");
const startButton = document.querySelector("#start-button");

var questionElement = document.querySelector("#question");
var answerfeedback = document.querySelector("#answer-feedback");
var currentscoreEl = document.querySelector("#current-score");
var buttonchoices = ["#answer1", "#answer2", "#answer3", "#answer4"];
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");
var answerContainer = document.querySelector(".answers");
var cardhidden = document.querySelector(".card-hidden");
var Highscores = document.querySelector("#highscores");

cardhidden.classList.add("hide");
var questionIndex = 0;
var currentscore = 0;
// var timer;
// var timerCount = 60;
var chosenQuestion = ""; 
// var Highscores = "";
var initials = "";



// array of questions & answers
var questions =
[   {question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "algorithm", "numbers"],
    answer: "algorithm"
    },

    {question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets"},

    {question: "Arrays in JavaScript can be used to store all except:",
     choices: ["values", "variables", "strings", "groceries"],
     answer: "groceries"},

    {question: "String values must be enclosed within ____ when being assigned to variables.",
     choices: ["single quotes", "single or double quotes", "double quotes", "brackets"],
     answer: "single or double quotes"},

    {question: "Contorl flow is the order in which ____ are executed or evaluated when a program is run.",
     choices: ["algorithms", "boolean values", "arrays, variables, and strings", "individual statements, instructions or function calls"],
     answer: "individual statements, instructions or function calls"},
  ];

startButton.addEventListener("click", startGame);


function startGame() {
    isWin = false;
    isLoss = false;
    timerCount = 60;
    startTimer()
     // load questions //load answers 
    renderBlanks();
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true; 
    console.log(currentscore);
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
        getInitials();
        startButton.disabled = false;
      }
    }, 1000); 
  }

  function renderBlanks() {
    chosenQuestion = questions[questionIndex].question;
    questionElement.textContent = chosenQuestion;
    var choices = questions[questionIndex].choices;
    for (var i = 0; i < choices.length; i++) {
      console.log(chosenQuestion, "rendering question");
      var options = document.querySelectorAll(`${buttonchoices[i]}`);
      for (var j = 0; j < options.length; j++) {
        options[j].textContent = choices[i];
      }
    }
  }

  answerContainer.addEventListener("click", function(event){
    var chosenAnswer = event.target
    if (chosenAnswer.matches("button")) {
      console.log(chosenAnswer, "chosen answer");
      checkAnswer(chosenAnswer.textContent);
    }
  })

  function checkAnswer(chosenAnswer) {
  console.log(chosenQuestion, chosenAnswer, "clicked")
  var correctAnswer = questions[questionIndex].answer;
  if (chosenAnswer === correctAnswer) {
    answerfeedback.textContent = "correct";
    currentscore += 10;
    currentscoreEl.textContent = currentscore;
  } else {
    answerfeedback.textContent = "incorrect";
    timerCount -= 10;
  } 
  questionIndex++;
  if (questionIndex < questions.length) {
    renderBlanks();
  } else {
    clearInterval(timer);
    timerElement.textContent = "You Finished!";
    getInitials();
  } 
}

// if game ends prompt to enter initials and save score to local storage
function getInitials() {
  cardhidden.classList.remove("hide");
}
 // set new submission to local storage 
 localStorage.setItem("highscore", JSON.stringify(highscore));

// submitButton.addEventListener("click", function(event) {
//   event.preventDefault();

// function renderLastRegistered() {
//   localStorage.getItem("#initials");
//   var highscores = localStorage.getItem("#current-score");
//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }
// if initials are entered display highscores with local storage

// function saveHighscore() {
//   var initials = document.querySelector("#initials").value;
//   localStorage.setItem("initials", initials);
//   localStorage.setItem("currentscore", currentscore);
//   renderLastRegistered();
// }










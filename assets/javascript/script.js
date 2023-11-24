var timerElement = document.querySelector("#timer-count");
const startButton = document.querySelector("#start-button");

var questionElement = document.querySelector("#question");
var answerfeedback = document.querySelector("#answer-feedback");
var currentscoreEl = document.querySelector("#current-score");

var buttonchoices = ["#answer1", "#answer2", "#answer3", "#answer4"];
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");
var answerContainer = document.querySelector(".answers");
var Highscores = document.querySelector("#Highscores");

var currentscore = 0;
var timer;
var timerCount = 60;
var chosenQuestion = "";
 
var Highscores = "";
var initials = "";
var isWin = false;
var isLoss = false;

var questionIndex = 0;


// array of questions
var questions =
[   {question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "algorithm", "numbers"],
    answer: "algorithm"
    },

    {question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"},

    {question: "Arrays in JavaScript can be used to store all except:",
     choices: ["values", "variables", "Strirngs", "groceries"],
     answer: "groceries"},

    {question: "String values must be enclosed within ____ when being assigned to variables.",
     choices: ["single quotes", "single or dobule quotes", "double quotes", "brackets"],
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
        getInitials();
        clearInterval(timer);
        console.log(initials + currentscore);
        
        
      }
    }, 1000); 
  }

  function renderBlanks() {
    // Randomly picks word from words array
    // chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    chosenQuestion = questions[questionIndex].question;
    questionElement.textContent = chosenQuestion;
    var choices = questions[questionIndex].choices;
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < choices.length; i++) {
      console.log(chosenQuestion, "rendering question");
      var options = document.querySelectorAll(`${buttonchoices[i]}`);
      for (var j = 0; j < options.length; j++) {
        options[j].textContent = choices[i];
      }
      // var question.textContent=chosenQuestion
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
    getInitials();
    clearInterval(timer);
  }


    //   if (chosenQuestion === questions[questionIndex] && chosenAnswer === answer3) {
    // // if answer is correct display correct and load next question
    //       console.log("correct");
    //       answerfeedback.textContent = "correct";
    //       currentscore = currentscore + 10;
    //       if (chosenQuestion === questions[0] && chosenAnswer === answer1 || answer2 || answer4) {
    // // if answer is correct display correct and load next question
    //           console.log("incorrect");
    //           timerCount = timerCount - 10;
    //   }}

    //   if (chosenQuestion === questions[questionIndex] && chosenAnswer === answer2) {
    //       console.log("correct");
    //       answerfeedback.textContent = "correct";
    //       currentscore = currentscore + 10;
    //       if (chosenQuestion === questions[1] && chosenAnswer === answer1 || answer3 || answer4) {
    //           console.log("incorrect");
    //           answerfeedback.textContent = "incorrect";
    //           timerCount = timerCount - 10;
    //   }}

    //   if (chosenQuestion === questions[questionIndex] && chosenAnswer === answer4) {
    //       console.log("correct");
    //       answerfeedback.textContent = "correct";
    //       currentscore = currentscore + 10;
    //       if (chosenQuestion === questions[2] && chosenAnswer === answer1 || answer2 || answer3) {
    //           console.log("incorrect");
    //           answerfeedback.textContent = "incorrect";
    //           timerCount = timerCount - 10;
    //   }}

    //   if (chosenQuestion === questions[questionIndex] && chosenAnswer === answer2) {
    //       console.log("correct");
    //       answerfeedback.textContent = "correct";
    //       currentscore = currentscore + 10;
    //       if (chosenQuestion === questions[3] && chosenAnswer === answer1 || answer3 || answer4) {
    //           console.log("incorrect");
    //           answerfeedback.textContent = "incorrect";
    //           timerCount = timerCount - 10;
    //   }}
      
    //   if (chosenQuestion === questions[questionIndex] && chosenAnswer === answer4) {
    //       console.log("correct");
    //       answerfeedback.textContent = "correct";
    //       currentscore = currentscore + 10;
    //       if (chosenQuestion === questions[4] && chosenAnswer === answer1 || answer2 || answer3) {
    //           console.log("incorrect");
    //           answerfeedback.textContent = "incorrect";
    //           timerCount = timerCount - 10;
    //   }}
     }

  

// if timer runs out display game over

// if all questions are answered display game over

// if game ends prompt to enter initials and save score to local storage
function getInitials() {
  prompt("Enter your initials");
      }
    
// if initials are entered display highscores with local storage












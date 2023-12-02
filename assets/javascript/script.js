const startButton = document.querySelector("#start-button");
const submitButton = document.querySelector("#submit-button");
const playagainButton = document.querySelector("#playagain-button");
const clearButton = document.querySelector("#clear-button");

var timeleft = document.querySelector("#timeleft");
var timerElement = document.querySelector("#timer-count");
var questionElement = document.querySelector("#question");
var answerContainer = document.querySelector(".answers");
var answerfeedback = document.querySelector("#answer-feedback");
var currentscoreEl = document.querySelector("#current-score");
var buttonchoices = ["#answer1", "#answer2", "#answer3", "#answer4"];
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");
var title4 = document.querySelector("#title4");

var highscoresList = document.querySelector("#highscoresList");
var highscoresCountSpan = document.querySelector("#highscoresCountSpan");
var cardhidden = document.querySelector("#card-hidden");


var questionIndex = 0;
var currentscore = 0;
var chosenQuestion = "";
var initials = document.getElementById("initials");
var currentScoreArray = []; 
var highscores = [];


$(cardhidden).css("display", "none");
$(playagainButton).css("display", "none");
$(answerContainer).css("display", "none");
$(title4).css("display", "none");

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


// start button event listener
startButton.addEventListener("click", startGame);

// timer variables
function startGame() {
  
    isWin = false;
    isLoss = false;
    timerCount = 60;
    startTimer()
     // load questions //load answers 
    renderBlanks();
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    answerContainer.style.display = ("display", "flex");
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
          $(startButton).css("display", "none");
          $(playagainButton).css("flex");
          // Clears interval and stops timer
          clearInterval(timer);
          getInitials();
        }
      }
      // Tests if time has run out, makes sure timer never goes below zero
      if (timerCount <= 0) {
        timerElement.textContent = "You ran out of time :(";
        // Clears interval
        clearInterval(timer);
        getInitials();
        $(startButton).css("display", "none");
        $(playagainButton).css("flex");
        $(questionElement).css("display", "none");
        $(answerContainer).css("display", "none");
      }
    }, 1000); 
  }
  
  // render questions and answers
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

// make container clickable and add event target
  answerContainer.addEventListener("click", function(event){
    var chosenAnswer = event.target
    if (chosenAnswer.matches("button")) {
      console.log(chosenAnswer, "chosen answer");
      checkAnswer(chosenAnswer.textContent);
    }
  })

//check if answer is correct or incorrect and display feedback
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

// if game ends prompt to enter initials and adjust display
function getInitials() {
  $(cardhidden).css("display", "flex");
  $(playagainButton).css("display", "none"); 

    submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var newinitials = initials.value.trim();
    // save initals to array // save scores to array
    if (newinitials !== ""){
      var highscore = JSON.parse(localStorage.getItem("highscores")) || [];
      var newScore = {
        newinitials: newinitials,
        score: currentscore
      };
      highscore.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscore));
    }
    // get scores from locala storage and display scores on page
// get score from local storage array and append to list
// get initials from local storage array and append to score based on index value
function displayScores() {
  var highscore = JSON.parse(localStorage.getItem("highscores")) || [];
  for (var i = 0; i < highscore.length; i++) {
    var newScore = document.createElement("li");
    newScore.textContent = highscore[i].score + " " + highscore[i].newinitials;
    // order from highest to lowest?
    highscore.sort(function(a, b) {
      return b.score - a.score;
    });
    //put scores in list with numbers
    highscoresList.appendChild(newScore);
  }
}
displayScores();
    // hide timer and questions
    function hideStuff() {
    $(answerContainer).css("display", "none");  
    $(cardhidden).css("display", "none");
    $(questionElement).css("display", "none");
    $(timerElement).css("display", "none");
    $(currentscoreEl).css("display", "none");
    $(answerfeedback).css("display", "none");
    $(timeleft).css("display", "none");
    $(startButton).css("display", "none");
    $(playagainButton).css("display", "flex");
    $(title4).css("display", "flex");
    };
    hideStuff();
  })
}




// if play again button is clicked, reload page to start over
playagainButton.addEventListener("click", function() {
  location.reload();
  displayScores();
})


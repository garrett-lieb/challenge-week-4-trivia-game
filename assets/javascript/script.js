var scores = document.querySelector(".scores");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var question = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

var chosenAnswer = "";
var highscores = "";
var timer;
var timerCount = 60;


// The startQuiz function is called when the start button is clicked

// if answer if correct display correct


// if answer is correct display next quesion in array


// if answer is incorrect display incorrect and subtract 10 seconds from timer


// if timer reaches 0 end game


// if all questions are answered end game


// if end game display score and prompt to enter initials


// if initials are entered display highscores with local storage
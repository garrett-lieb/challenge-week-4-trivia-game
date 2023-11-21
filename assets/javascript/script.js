var scores = document.querySelector(".scores");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionElement = document.querySelector(".question");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var answerfeedback = document.querySelector(".answer-feedback");

var chosenAnswer = "";
var highscores = "";
var timer;
var timerCount = 60;

// set questions array
{
    question: "Commonly used data types DO NOT include:",
    answer1: 
    answer2:
    answer3:
    answer4:
}
{
    question: "The condition in an if / else statement is enclosed within ____.",
    answer1: 
    answer2:
    answer3:
    answer4:
}
{
    question: "Arrays in JavaScript can be used to store ____.",
    answer1: 
    answer2:
    answer3:
    answer4:
}
{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answer1: 
    answer2:
    answer3:
    answer4:
}
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: 
    answer2:
    answer3:
    answer4:
}


// The startQuiz function is called when the start button is clicked

function startQuiz() {
    // start timer
    // get questions
}

function startTimer() {
        // Sets timer
        timer = setInterval(function() {
          timerCount--;
          timerElement.textContent = timerCount;
        }, 1000);
      
}

function getQuestions() {

}

// if answer if correct display correct


// if answer is correct display next quesion in array


// if answer is incorrect display incorrect and subtract 10 seconds from timer


// if timer reaches 0 end game


// if all questions are answered end game


// if end game display score and prompt to enter initials


// if initials are entered display highscores with local storage
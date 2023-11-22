
// array of questions
//array of answers?


[
    "question1: Commonly used data types DO NOT include:",
    "answer1-1: boolean"
    "answer2-1: number"
    "answer3-1: algorithm"
    "answer4-1: string"
]


[
    "question2: The condition in an if / else statement is enclosed within ____.",
    "answer1-2: ' ' "
    "answer2-2: { } "
    "answer3-2: [ ] "
    "answer4-2: ( )"
]


[
    "question: Arrays in JavaScript can be used to store ____.",
    "answer1: a list of values"
    "answer2: a list of variables"
    "answer3: a list of strings"
    "answer4: a list of groceries"
]


[
    "question: String values must be enclosed within ____ when being assigned to variables.",
    "answer1: double quotes"
    "answer2: single or double quotes"
    "answer3: single quotes"
    "answer4: brackets"
]


[
    "question: Contorl flow is the order in which ____ are executed or evaluated when a program is run.",
    "answer1: alogrithms"
    "answer2: boolean values"
    "answer3: arrays, variables, and strings"
    "answer4: individual statements, instructions or function calls"
]

// if end game display score and prompt to enter initials
// if initials are entered display highscores with local storage
// if answer is correct add 10 points to score
// if answer is incorrect subtract 10 seconds from timer

//if all questions are answered &&& time !== 0 end game
// if time === 0 end game
// if game ends prompt to enter initials and save score to local storage
// if initials are entered display highscores with local storage

function winGame() {
}

function loseGame() {

}

function getInitials() {
    var initials {
        prompt("Enter your initials");
        
    }
}

function saveHighscore() {
    var Highscores = {
        student: student.value,
        grade: grade.value,
        comment: comment.value.trim(),
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
    }
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
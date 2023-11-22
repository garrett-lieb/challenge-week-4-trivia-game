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
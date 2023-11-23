

// if end game display score and prompt to enter initials
// if initials are entered display highscores with local storage
// if answer is correct add 10 points to score
// if answer is incorrect subtract 10 seconds from timer

//if all questions are answered &&& time !== 0 end game
// if time === 0 end game
// if game ends prompt to enter initials and save score to local storage
// if initials are entered display highscores with local storage



function checkAnswer() {
    // if answer is correct display next quesion in array
      if (chosenQuestion === questions[0] && chosenAnswer === answer3) {
    // if answer is correct display correct and load next question
          console.log("correct");
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[0] && chosenAnswer === answer1 || answer2 || answer4) {
    // if answer is correct display correct and load next question
              console.log("incorrect");
              timerCount = timerCount - 10;
      }}

      if (chosenQuestion === questions[1] && chosenAnswer === answer2) {
          console.log("correct");
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[1] && chosenAnswer === answer1 || answer3 || answer4) {
              console.log("incorrect");
              timerCount = timerCount - 10;
      }}

      if (chosenQuestion === questions[2] && chosenAnswer === answer4) {
          console.log("correct");
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[2] && chosenAnswer === answer1 || answer2 || answer3) {
              console.log("incorrect");
              timerCount = timerCount - 10;
      }}

      if (chosenQuestion === questions[3] && chosenAnswer === answer2) {
          console.log("correct");
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[3] && chosenAnswer === answer1 || answer3 || answer4) {
              console.log("incorrect");
              timerCount = timerCount - 10;
      }}

      if (chosenQuestion === questions[4] && chosenAnswer === answer4) {
          console.log("correct");
          currentscore = currentscore + 10;
          if (chosenQuestion === questions[4] && chosenAnswer === answer1 || answer2 || answer3) {
              console.log("incorrect");
              timerCount = timerCount - 10;
      }}
    }


// function winGame() {}


// function loseGame() {}

function getInitials() {
    prompt("Enter your initials");
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

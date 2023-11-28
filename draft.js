submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    //initals value from input
  
    var highscore = (currentscore + "---" + initals.value);
    console.log(highscore);
    renderhighscoresList();
    storeScores();
   })
  
   // store scores in local storage
  function storeScores() {
    window.localStorage.setItem("highscores", JSON.stringify(recentscore));
  }
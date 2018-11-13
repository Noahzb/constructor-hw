var inquirer = require("inquirer");
var letters = ["a", "b", "c"];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned one of the three letters
var letterToGuess = null;

// This is what we'll use to count down
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;





// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
  // (i.e. guessesLeft will get displayed in HTML)
  console.log("you have" +" " +guessesLeft+" " + "guesses left");
};

var updateLetterToGuess = function() {
  // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("Game started please guess a letter")
};

var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  console.log("guessed letters" + guessedLetters);
};

// Function will be called when we reset everything


// Execute on page load.

updateLetterToGuess();
updateGuessesLeft();

// This function will capture the keyboard clicks.
process.argv[0] = function(event) {
  // It's going to reduce the guesses by one
  guessesLeft--;

  // Lowercase the letter
  var letter = String.fromCharCode(event.which).toLowerCase();

  // Then add the guess to the guessedLetters array
  guessedLetters.push(letter);

  // Then its going to run the update functions
  for (i = 0; i < 5; i++) {
  updateGuessesLeft();
  updateGuessesSoFar();}


  // We'll check if there's a match.
  while (letter === letterToGuess) {

    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    console.log(wins)

    // Then we'll reset the game
   
  }

  // If we are out of guesses...
  if (guessesLeft === 0) {

    // Then we will loss and we'll update the HTML to display the loss.
    losses++;
    console.log("you lose");

    // Then we'll call the reset.
   
}};
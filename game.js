
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Wins = 0;
var Losses = 0;
var GuessesLeft = 9;
var lettersGuessed = [];
var userGuess = null;
var computerGuess = choices[Math.floor(Math.random() * choices.length)];

document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


if (lettersGuessed.indexOf(userGuess) < 0 && choices.indexOf(userGuess) >= 0) {
    lettersGuessed[lettersGuessed.length] = userGuess;
    GuessesLeft --;
    console.log(lettersGuessed.indexOf(userGuess))
    console.log ("-----------")
    console.log(userGuess)
    console.log(computerGuess)
}
    

var html = 
"<h1>Guess What Letter I'm Thinking Of!</h1>" +
"<p> Wins: " + Wins + "</p>" + 
"<p> Losses: " + Losses + "</p>" + 
"<p> Guesses Left: " + GuessesLeft + "</p>" +
"<p> Your Guesses so far: " + lettersGuessed + "</p>";

// unknown error: when game has been won it takes the winning guess and counts it as the first guess of the next game.
if (computerGuess === userGuess) {
    Wins++;
    GuessesLeft = 9;
    lettersGuessed = [];
    computerGuess = choices[Math.floor(Math.random() * choices.length)];
    console.log("Wins: " + Wins + " Losses: " + Losses + " GuessesLeft: " + GuessesLeft + 
    " Guesses so far: " + lettersGuessed + " Computer picked: " + computerGuess);
}

if (GuessesLeft == 0){
    Losses++;
    GuessesLeft = 9;
    lettersGuessed = [];
    computerGuess = choices[Math.floor(Math.random() * choices.length)];
    console.log("Wins: " + Wins + " Losses: " + Losses + " GuessesLeft: " + GuessesLeft + 
    " Guesses so far: " + lettersGuessed + " Computer picked: " + computerGuess);

}
    document.querySelector("#game").innerHTML = html;
}
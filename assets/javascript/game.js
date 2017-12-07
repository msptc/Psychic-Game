//makes # of wins and losses start at 0
var numberofwins = 0;
var numberoflosses = 0;
var guessesRemaining, guessedLetters, letterGuess;

//making an array for letters
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w' 'x', 'y', 'z'];

//naming functions that will be below
reset();
display();

//to capture keyboard input and make conditions
document.onkeyup = function(event) {
    var guess = event.key;

   if (guess === letterGuess) {
   	win();
   }
   
   else if (guessesRemaining - 1 === 0) {
   	lose();
   }
   
   else {fail(guess);
   }

display();

}
//to display number of guesses, losses, guesses remainng and letters guessed
function display() {
	var winsX = document.getElementById("numberofwins");
	
	var lossesX = document.getElementById("numberoflosses");
	
	var guessesRemaining = document.getElementById("numberofguessesleft");
	
	var letterGuessed = document.getElementById("numberofguessessofar");
	
	winsX.innerHTML = wins;
	
	lossesX.innerHTML = losses;
	
	numberofguessesleft.innerHTML = guessesRemaining;
	
	letterGuessed.innerHTML = guessedLetters.join(',');
}
//increases # of wins by an increment of 1
function win(){
	numberofwins++;
	reset();
}
//increases # of losses by an increment of 1
function lose() {
	numberoflosses++;
	reset();

}
//subtracts # of wrong guesses from 10 by an increment of 1
function fail(letter) {
	guessesRemaining--;
	guessedLetters.push(letter);
}
//resets game to 10 guesses after 10 wrong guesses or a win
function reset(){
	guessesRemaining=10;
	//array to capture letters guesseed so far
	guessedLetters = [];
	letterGuess = letters[Math.floor(Math.random() * letters.length)];
}


//Global variables to be used in the game	
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var loss = 0;
var guessLeft = 9;
var guesses = [];
var letterPick = [];


/*This will produce a random number between 0-26, this will be used 
to choose a word out of the alphabet array*/
function randomNumber() {
  var number = Math.floor(Math.random(number) * 26);
    return number; 
};



/*This will take the number from randomNumber and retrieve that word 
from the alphabet array.  The .splice replaces the letter in the array 
each time.*/
function wordChoice(alphabet) {
        var num = randomNumber();
        var letter = alphabet[num];
        letterPick.splice(0, 1, letter)
        return;     
};

//calls the first letter of the game
wordChoice(alphabet);
//shows the answer in the console
console.log(letterPick);



/*this will test if the key typed is a letter by using the 
ASCII codes*/
function letterCheck(keyCode) {
	return keyCode >=65 && keyCode <=90;
};


//reset the game after win or loss
function init() {
	//reset guesses, empty array
	guesses = [];
	//reset guesses left to 9
	guessLeft = 9
	//choose a new letter
	wordChoice(alphabet);
	//shows the answer in the console
	console.log(letterPick);
}


//user interaction
document.addEventListener('keyup', keyStroke);




/*keyCode gives the number of the keystroke and letter gives the letter which will 
be compared with the random letter of the alphabet chosen by the computer*/
function keyStroke(event) {
   	var keyCode = event.keyCode;
   	letter = String.fromCharCode(keyCode).toLowerCase();
   	   
	   //check to see if letter hasn't been guessed
		if(!letterCheck(keyCode) || guesses.indexOf(letter) > -1) {
			return;
		}

		/*compare the users guess with the random letter chosen by the computer. 
		If correct the wins will +1 and the game will reset.  If the letter is not
		correct the guesses left will -1 and push the letter to the guesses array.
		This will show the letter on the webpage*/
		if (letter === letterPick[0]) {
			wins++;
			init();
			}
			else { 
				guessLeft--;
				guesses.push(letter);
			}
		//if the guesses left reaches 0 the game the loss goes up 1 and the game resets
		if (guessLeft === 0) {
			loss++;
			init();
			}
			

	//variables created to use in document.querySelector
	var winsEL = "Wins: " + wins;
	var lossEL = "Losses: " + loss;
	var guessesLeftEL = "Guesses Left: " + guessLeft;
	var WrongGuessEL = "Letters Already Guessed: " + guesses.join(", ");

	//inserting the javascript actions to the html page
	document.querySelector("#wins").innerHTML = winsEL
	document.querySelector("#losses").innerHTML = lossEL
	document.querySelector("#guessesLeft").innerHTML = guessesLeftEL
	document.querySelector("#wrongGuess").innerHTML = WrongGuessEL

 

}
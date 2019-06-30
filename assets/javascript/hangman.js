// Create an array of words
var words = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"indigo",
	"violet",
	"aqua",
	"ruby",
	"emerald",
	"sapphire",
	"cyan",
	"taupe",
	"cerulean",
	"pink",
	"beige",
	"black",
	"white",
	"brown",
	"gray",
	"bronze",
	"burgundy",
	"canary",
	"charcoal",
	"mohogany",
	"cobalt",
	"coral",
	"cream",
	"olive",
	"denim",
	"ebony",
	"eggplant",
	"gold",

];
	
// Pick a random word
var word = randomWord();
var answer = "";
var guesses = [];
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var needsReset = false;

createAnswer();
displayStats();

function reset() {
	word = randomWord();
	answer = "";
	guesses = [];
	remainingGuesses = 10;
	needsReset = false;
	createAnswer();
	displayStats();
	document.getElementById("alerts").innerText="";
}

function randomWord() {
	return words[Math.floor(Math.random() * words.length)];
}

//Set up the answer answer
function createAnswer() {
	for (var i = 0; i < word.length; i++) {
		answer += "_";
	}
}

function displayStats() {
	document.getElementById("word-display-letters").innerText = answer;
	document.getElementById("error-count").innerText = remainingGuesses;
	document.getElementById("win-count").innerText = wins;
	document.getElementById("loss-count").innerText = losses;
	document.getElementById("guessed-letters").innerText = guesses;
}
	
document.onkeyup = function(event) {
	var guess = event.key;
	if (!guesses.includes(guess) && !needsReset) {
		guesses.push(guess);
		if (word.includes(guess)) {
			reveal(guess);
		}
		else {
			remainingGuesses--;
		}
	}
	if (needsReset) {
		reset();
	}
	if (!answer.includes("_")) {
		wins++;
		document.getElementById("alerts").innerHTML="You win!";
		needsReset = true;
	}
	else if (remainingGuesses === 0) {
		losses++;
		document.getElementById("alerts").innerHTML="You lose!<br><p>"+ word +"</p>";
		needsReset = true;
	}
	displayStats();
}

function reveal(guess) {
	for (var i = 0; i < word.length; i++) {
		if (word[i] === guess) {
			answer = answer.substr(0, i) + guess + answer.substr(i + 1);
		}
	}
}

	
var answerWords = [
    "MONET", "WARHOL", "POLLUCK", "OKEEFFE", "KAHLO", "DEGAS", "CASSATT"
];

var alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'
];

// takes no arguements and returns a random index into answerWord
function getRandomIndex() {
    var randomNumber = Math.random() * answerWords.length;
    var randomIndex = Math.floor(randomNumber);
    return randomIndex;
};

// Create * for each letter in chosen answerWords
function hiddenForm(word) {
    var newWord = "";
    for (let i = 0; i < word.length; i++) {
        newWord = newWord + "*";
    }
    return newWord;
};

//Index answerWords at randomIndex
function getRandomWord() {
    var randomIndex = getRandomIndex();
    return answerWords[randomIndex];
};

var chosenWord = getRandomWord();
// var hiddenName = ""
var correctGuesses = 0;
var guessesLeft = 6;
var correctLetters = [];
var wrongLetters = [];

// var element = document.createElement('div');
// element.id = 'testqq';
// var el = document.getElementById('testqq');

//ChosenWord in hidden form (with astericks)
function hiddenWord() {
    return hiddenForm(chosenWord);
};
var hiddenName = hiddenWord();
console.log (hiddenName);

function displayHiddenName() {
document.getElementById("artistName").innerText = hiddenName.hiddenWord();
};

//Reset Page to start new game
function reset() {
    var chosenWord = getRandomWord();
    var hiddenWord = displayHiddenName (); 
    var correctGuesses = 0;
    var guessesLeft = 6;
    var correctLetters = [];
    var wrongLetters = [];
};
document.getElementById("scoreBoard").innerText = guessesLeft;

function guessing () {
    var guess = event.key;
    guessesLeft--;

}


// var element = document.createElement("h1").innerHTML;




















// returns true if player wins
// function hangmanGame(answerWord) {
//     var word = answerWord.split("");              // Selected word
//     var guesses = [];      // Stored guesses
//     var numWrongGuesses = 0;
//     var space = word.split(" ").length;

//     // Call function to display HTML
//     // Choose random answerWord
//     var answerWordNode = document.getElementById("answerWord");
//         function getanswerWord (max, min) {
//             var answerWord = Math.random.floor() * (7 - 0) + 0;
//             return (getanswerWord)
//     for (var letter = 0; letter < word.length; letter++) {
//         function addElement () { 
//             // create a new div element 
//             var newDiv = document.createElement("div");
//                 newDiv.style = ('font-size: 200px');
//             var newContent = document.createTextNode("*"); 
//             newDiv.appendChild(newContent);  


//         // create empty element with the letter?
//         // append it to dom? 

//         if(word[letter] === " ") {
//             var element = document.createElement("h1").innerHTML = " ";
//         };
//         var element = document.createElement("h1").innerHTML;
//     };

//     // If wrong, display body part, numWrongGuesses++
//     // If right, display letter

//     while(numWrongGuesses <= 6) {
//         var guess = prompt("What's your guess?");
//         // Check guess against stores guesses
//         if (evaluateGuess(guesses, guess)) {
//             alert("You guessed that letter already!");
//             continue;
//         };

//         if (evaluateGuess(word, guess)) {
//             // update html

//         } else {
//             numWrongGuesses++;
//             //update hangman
//             var hangman = document.getElementById("hangman")
//             var newBodyPart = document.createElement("div")


//         };
//     };
// };
// function evaluateGuess(answerWord, guess) {
//     forEach (function(var i  answerWord)) {
//         if (guess === i)
//             return true;
//     }
//     return false;    
// };

// function updateGuesses() {

// };

// function updateHTML() 


// Track wins :)

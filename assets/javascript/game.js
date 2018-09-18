// var artistNames = [
//     "CLAUDE MONET", "ANDY WARHOL", "JACKSON POLLUCK", "GEORGIA O'KEEFFE", "FRIDA KAHLO", "EDGAR DEGAS", "MARY CASSATT"
// ];

var alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'
];

// returns true if player wins
function hangmanGame(answerWord) {
    var word = answerWord.split("");              // Selected word
    var guesses = [];      // Stored guesses
    var numWrongGuesses = 0;
    var space = word.split(" ").length;
    
    

    // Call function to display HTML
    var answerWordNode = document.getElementById("answerWord");
    for(var letter = 0; letter < word.length; letter++) {
        // create empty element with the letter
        // append it or whatever to the dom node 
        // show spaces
        // ****-****-****
        if(word[letter] === " ") {
            var element = document.createElement("p").innerHTML = "-";

        }
        var element = document.createElement("p").innerHTML;
    }

    while(numWrongGuesses <= 6) {
        var guess = prompt("What's your guess?");
        // Check guess against stores guesses
        if (evaluateGuess(guesses, guess)) {
            console.log("you're a pussy");
            continue;
        } 

        if (evaluateGuess(word, guess)) {
            // update html
            
        } else {
            // updateHangman()
            numWrongGuesses++;
        }
    }
};

function evaluateGuess(answerWord, guess) {
    forEach (var i in answerWord) {
        if (guess === i)
            return true;
    }
    return false;    
};

// function updateGuesses() {

// };

function updateHTML() {
    
};


// If wrong, display body part, numWrongGuesses++
// If right, display letter

// Track wins :)


var LetterGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var incorrectGuess = [];
var guessLeft = 10;
var wins = 0;
var losses = 0;
var guesses = 0;
var used = [];
var computerGuess = "";
// var ltrSoFar = userGuess;

// User needs to pick a number//
// computer needs to pick number//
// if the numbers are the same - wins, if not loss 

var game = document.getElementById("game");
console.log(game)
function startGame() {
    computerGuess = LetterGuess[Math.floor(Math.random() * LetterGuess.length)];
    guessLeft = 10;
    guesses = 0;
    used = [];
    losses = 0;


    var text = "<p> The Psychic Game </p> " +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Guess So Far: " + guesses + "</p>" +
        "<p>Letters Used: " + used + "</p>";


    
        game.innerHTML=text;
        console.log(game);

}
startGame();

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // var loss = userGuess !== computerGuess
    // var ltrSoFar = userGuess
    // if (losses === 10){
    //     function reset()
    //     startGame()
    // }

    if (userGuess === computerGuess) {
        wins++;
        guesses++;
        alert("wins: " + wins)
        startGame();

    }
    if (losses === 10){
        startGame();

    }




    if (userGuess !== computerGuess) {
        losses++;
        guessLeft--;
        guesses++;
        used.push(userGuess);
        alert("losses: " + losses);
        console.log(computerGuess);



    }
    var text = "<p> The Psychic Game </p> " +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Guess So Far: " + guesses + "</p>" +
        "<p>Letters Used: " + used + "</p>";


    
        game.innerHTML=text;





    // if (loss > 10) {
    //     losses++
    //     guessLeft--
    //     guesses++
    //     ltrSoFar++ 
    // alert("losses:" + losses)




    function reset() {
        losses = 10;
        startGame()
    }
}

// console.log(computerGuess)

// var html = "<p> The Psychic Game </p> " +
//     "<p>Wins: " + wins + "</p>" +
//     "<p>Losses: " + losses + "</p>" +
//     "<p>Guesses Left: " + guessLeft + "</p>" +
//     "<p>Guess So Far: " + guesses + "</p>";
//     "<p>Letters Used: " + used + "</p>"


// document.querySelector('#game').innerHTML = html;








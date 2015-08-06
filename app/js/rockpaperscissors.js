////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}


function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


//Get move from player

function getPlayerMove(move) {
    move = move || getInput();
    return move;
}


//Get move from computer

function getComputerMove(move) {
    move = move || randomPlay(); 
    return move;
}


//Identify winner 
function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove == computerMove) {
         winner = "tie";
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        winner = "player";
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    }
    
    return winner;
}




//Play at least 5 rounds

var playerWins = 0;
var computerWins = 0;

function playToFive() {

while (computerWins !== 5 && playerWins < 5 || computerWins < 5 && playerWins !== 5) {

    console.log("Let's play Rock, Paper, Scissors");

    var winner = getWinner(playerMove, computerMove);
    var computerMove = getComputerMove();
    var playerMove = getPlayerMove();

    
    if (playerWins < 5 && computerWins < 5) {
    
        if (winner === "player") {
            playerWins += 1;
            computerWins += 0;
        } 
        else if (winner === "computer") {
            computerWins += 1;
            playerWins += 0;
        } 
        else {
            playerWins += 0;
            computerWins +=0;
        }
console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    
console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    


    }




  }

return [playerWins, computerWins];

}


//Call it! 
playToFive();

 

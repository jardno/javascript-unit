let playerSelection;
let computerSelection;
let choiceSet = ['rock', 'paper', 'scissors'];
let replay = true;


function computerPlay(playerSelection, computerSelection) {

    var randomChoice = Math.floor(Math.random() * 2);
    var computerSelection = choiceSet[randomChoice];
    console.log(computerSelection);
    playerSelection = prompt("rock, paper, or scissors?");

 
    console.log("You chose");
    console.log(playerSelection);
    console.log("Computer chose");
    console.log(computerSelection);

    return playerSelection;
    return computerSelection;

    if (playerSelection == computerSelection) {
        prompt("Tie! Play again? Y/N");
    } else if (playerSelection == "rock") {
        if (computerSelection == 'paper') {
            prompt("Computer's paper beats your rock. Play again? Y/N");
        } else if (computerSelection == 'scissors') {
            prompt("Your rock beats the computer's scissors! Play again? Y/N");
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            prompt("Your paper beats the computer's rock! Play again? Y/N");
        } else if (computerSelection == 'scissors') {
            prompt("Computer's scissors beats your paper. Play again? Y/N");
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            prompt("Your scissors beats the computer's paper! Play again? Y/N");
        } else if (computerSelection == 'rock') {
            prompt("Computer's rock beats your scissors. Play again? Y/N");
        }
    } else {
        prompt("Please enter a valid choice");
    }
}

computerPlay();


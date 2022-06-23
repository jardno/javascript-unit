let playGame = true;
let userResponse;
let gamesPlayed = 0;

function gameCheck() {
    document.getElementById("score").innerHTML = gamesPlayed;
    while (playGame == true) {
        console.log('good to game')
        startGame();
    }
}

function startGame() {
    userResponse = prompt('Play? Y/N');
    console.log(userResponse)
    gamesPlayed += 1;

    if (userResponse == 'Y') {
        gameCheck();
    } else {
        playGame = false;
        alert('see you next time');
    }
    
    return gamesPlayed;
}

gameCheck();


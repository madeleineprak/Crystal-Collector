var crystals = [0, 0, 0, 0]; //4 crystals
var targetScore = 0;
var playerScore = 0;
var numWins = 0;
var numLosses = 0;
var win = false;
var lose = false;

// Sets up game for the beginning and for whenever the player wins/loses.
function setGame() {
    playerScore = 0;
    win = false;
    lose = false;
    for (i = 0; i < crystals.length; i++) {
        crystals[i] = Math.floor(Math.random()*12) + 1;
    }
    targetScore = Math.floor(Math.random()*120) + 19;
    $("#target-score").html(targetScore);
    $("#player-score").html(playerScore);
    // console.log(crystals);
    // console.log(targetScore);
}

// Checks for a win/lose and alerts the user respectively.
function checkWinOrLose() {
    if (playerScore === targetScore) {
        numWins++;
        win = true;
        alert("You win!");
        $("#wins").html("Wins: " + numWins);
    } else if (playerScore > targetScore) {
        numLosses++;
        lose = true;
        alert("You lose!");
        $("#losses").html("Losses: " + numLosses);
    }
}

// Sets up the game initially.
setGame();

// When user clicks on the first crystal.
$("#crystal-one").on("click", function() {
    playerScore += crystals[0];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    $("#player-score").html(playerScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});

// When user clicks on the second crystal.
$("#crystal-two").on("click", function() {
    playerScore += crystals[1];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    $("#player-score").html(playerScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});

// When user clicks on the third crystal.
$("#crystal-three").on("click", function() {
    playerScore += crystals[2];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    $("#player-score").html(playerScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});

// When user clicks on the fourth crystal.
$("#crystal-four").on("click", function() {
    playerScore += crystals[3];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    $("#player-score").html(playerScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});
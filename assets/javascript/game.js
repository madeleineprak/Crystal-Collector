var crystals = [0, 0, 0, 0]; //4 crystals
var targetScore = 0;
var playerScore = 0;
var numWins = 0;
var numLosses = 0;
var win = false;
var lose = false;

// Sets up numbers for crystals and target score.
function setGame() {
    playerScore = 0;
    win = false;
    lose = false;
    for (i = 0; i < crystals.length; i++) {
        crystals[i] = Math.floor(Math.random()*12) + 1;
    }
    targetScore = Math.floor(Math.random()*120) + 19;
    console.log(crystals);
    console.log(targetScore);
}

function checkWinOrLose() {
    if (playerScore === targetScore) {
        numWins++;
        win = true;
        alert("You win!");
    } else if (playerScore > targetScore) {
        numLosses++;
        lose = true;
        alert("You lose!");
    }
}

setGame();

// When user clicks on the first crystal.
$("#crystal-one").on("click", function() {
    playerScore += crystals[0];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});

$("#crystal-two").on("click", function() {
    playerScore += crystals[1];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});

$("#crystal-three").on("click", function() {
    playerScore += crystals[2];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});

$("#crystal-four").on("click", function() {
    playerScore += crystals[3];
    console.log("Your score is " + playerScore + " and the target score is " + targetScore);
    checkWinOrLose();
    if (win || lose) {
        setGame();
    }
});
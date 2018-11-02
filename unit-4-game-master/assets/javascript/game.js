$(document).ready(function () {
    var numWins = 0;
    var numLosses = 0;
    var targetNum;
    var userScore = 0;
    var orangeCrystal;
    var blueCrystal;
    var yellowCrystal;
    var greenCrystal;

    //find target number between 19 - 120.
    function generateTargNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
        console.log(targetNum);
    }

    targetNum = generateTargNum(19, 120);

    console.log(targetNum);
   
    $("#targetNum").text("Target Number: " + targetNum);
    $("#userScore").text(userScore);
    orangeCrystal = Math.floor(Math.random() * 12) + 1; 
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    $("#winMsg").hide();
    $("#lossMsg").hide();

    //add to win/loss counter and reset game w/o refreshing page
    function newGame() {
        userScore = 0;
        targetNum = generateTargNum(19, 120);
        console.log(targetNum);
        
        
        orangeCrystal = Math.floor(Math.random() * 12) + 1;
        blueCrystal = Math.floor(Math.random() * 12) + 1;
        yellowCrystal = Math.floor(Math.random() * 12) + 1;
        greenCrystal = Math.floor(Math.random() * 12) + 1;
        
        $('#targetNum').text("Target Number: " + targetNum);
        $('#userScore').text(userScore);
    };

    //display win message to winning user and start new game
    function userWins() {
        numWins = numWins + 1
        $("#lossMsg").hide();
        $("#winMsg").show();
        $('#wins').text(numWins);

        newGame();
    };
    
    //display loss message to losing user and start new game
    function userLoses() {
        numLosses = numLosses + 1;
        $("#winMsg").hide();
        $("#lossMsg").show();
        $("#losses").text(numLosses);
        newGame();
    };

    // make crystals clickable

    $('#orangeCrystal').on('click', function () {
        userScore = userScore + orangeCrystal;
        $("#userScore").text(userScore);
        if (targetNum < userScore) {
            userLoses();
        }
        else if (targetNum === userScore) {
            userWins();
        }
    })


    $('#blueCrystal').on('click', function () {
        userScore = userScore + blueCrystal;
        $("#userScore").text(userScore);
        if (targetNum < userScore) {
            userLoses();
        }
        else if (targetnumber === userScore) {
            userWins();
        }
    })

    $('#yellowCrystal').on('click', function () {
        userScore = userScore + yellowCrystal;
        $("#userScore").text(userScore);
        if (targetNum < userScore) {
            userLoses();
        }
        else if (targetNum === userScore) {
            userWins();
        }
    })


    $('#greenCrystal').on('click', function () {
        userScore = userScore + greenCrystal;
        $("#userScore").text(userScore);
        if (targetNum < userScore) {
            userLoses();
        }
        else if (targetNum === userScore) {
            userWins();
        }
    })

});
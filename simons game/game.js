
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // Declare randomNumber properly
    var randomButtonColor = buttonColors[randomNumber];
    gamePattern.push(randomButtonColor); // Add the random color to the gamePattern array

    // Assuming there's an element with class 'gamePattern' where you want to display the randomButtonColor
    $('.gamePattern').text(randomButtonColor); // Use jQuery correctly
}

nextSequence();


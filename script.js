let timeLeft = 1 * 60 * 60; // Example: 2 hours in seconds
const timerElement = document.getElementById('timer');

function updateTimerDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const countdown = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        result();  // Automatically submit the form when time is up
    } else {
        updateTimerDisplay();
        timeLeft--;
    }
}, 1000);

function result() {
    
    var score = 0;

    // List of correct answer IDs
    var correctAnswers = ['correct1', 'correct2', 'correct3', 'correct4', 'correct5'];

    // Loop through each correct answer ID
    for (var i = 0; i < correctAnswers.length; i++) {
        var correctAnswerElement = document.getElementById(correctAnswers[i]);

        // Check if the element is found and if it is checked
        if (correctAnswerElement && correctAnswerElement.checked) {
            score++;
        }
    }

    alert("Your score is: " + score);
    document.getElementById('exam').reset();
}

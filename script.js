const buttGroup = document.querySelector('.butt-group')
const subject = document.querySelector('.sub')
const upperGradeThreeExam = document.getElementById('mainWork')
// const retakes = document.getElementById('retakes')
const resultCard = document.getElementById('result-card')
function retake (){
    resultCard.style.display = 'none'
    document.getElementById('upperGradeThreeExam').reset();
    clearInterval(countdown);
    startTimer();
}
const jss_three = () => {
    resultCard.style.display = 'none'
    buttGroup.style.display = 'none'
    upperGradeThreeExam.style.display = 'block'
    subject.style.display = 'none';
    startTimer()
}
let timeLeft; 
let countdown; 

function startTimer(){
    timeLeft = 1 * 10 * 60;
    countdown = setInterval(() => {
        if (timeLeft <= 0){
            clearInterval(countdown);
            result()
        } else {
            updateTimerDisplay();
            timeLeft--;
        }
    }, 1000)
}

function updateTimerDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// const countdown = setInterval(() => {
//     if (timeLeft <= 0) {
//         clearInterval(countdown);
//         result();  // Automatically submit the form when time is up
//     } else {
//         updateTimerDisplay();
//         timeLeft--;
//     }
// }, 1000);

function result() {
    resultCard.style.display = 'block';
    var score = 0;

    // List of correct answer IDs
    var correctAnswers = ['correct1', 'correct2', 'correct3', 'correct4', 'correct5', 'correct6', 'correct7', 'correct8', 'correct9', 'correct10'];

    // Loop through each correct answer ID
    for (var i = 0; i < correctAnswers.length; i++) {
        var correctAnswerElement = document.getElementById(correctAnswers[i]);

        // Check if the element is found and if it is checked
        if (correctAnswerElement && correctAnswerElement.checked) {
            score++;
        }
    }

    // document.getElementById('results').innerHTML = score;

    var results = score
    document.getElementById('results').innerHTML = results;
}

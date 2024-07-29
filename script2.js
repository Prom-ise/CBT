const buttGroup = document.querySelector('.butt-group')
const subject = document.querySelector('.sub')
const upperGradeOneExam = document.getElementById('mainWork1')
const upperGradeTwoExam = document.getElementById('mainWork2')
const upperGradeThreeExam = document.getElementById('mainWork')
// const retakes = document.getElementById('retakes')
const resultCard = document.getElementById('result-card')
const resultCard2 = document.getElementById('result-card2')
const resultCard3 = document.getElementById('result-card3')
function retake (){
    resultCard3.style.display = 'none'
    document.getElementById('upperGradeThreeExam').reset();
    clearInterval(countdown3);
    startTimer3();
}
function retake3 (){
    resultCard2.style.display = 'none'
    document.getElementById('upperGradeTwoExam').reset();
    clearInterval(countdown2);
    startTimer2();
}
function retake2 (){
    resultCard.style.display = 'none'
    document.getElementById('upperGradeOneExam').reset();
    clearInterval(countdown);
    startTimer();
}
const jss_one = () => {
    resultCard.style.display = 'none'
    buttGroup.style.display = 'none'
    upperGradeTwoExam.style.display = 'none'
    upperGradeThreeExam.style.display = 'none'
    upperGradeOneExam.style.display = 'block'
    subject.style.display = 'none';
    startTimer()
}
const jss_two = () => {
    resultCard2.style.display = 'none'
    buttGroup.style.display = 'none'
    upperGradeOneExam.style.display = 'none'
    upperGradeTwoExam.style.display = 'block'
    upperGradeThreeExam.style.display = 'none'
    subject.style.display = 'none';
    startTimer2()
}
const jss_three = () => {
    resultCard3.style.display = 'none'
    buttGroup.style.display = 'none'
    upperGradeOneExam.style.display = 'none'
    upperGradeTwoExam.style.display = 'none'
    upperGradeThreeExam.style.display = 'block'
    subject.style.display = 'none';
    startTimer3()
}
let timeLeft; 
let countdown; 

function startTimer(){
    timeLeft = 1 * 15 * 60;
    countdown = setInterval(() => {
        if (timeLeft <= 0){
            clearInterval(countdown);
            resulti()
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

let timeLeft2; 
let countdown2; 
function startTimer2(){
    timeLeft2 = 1 * 15 * 60;
    countdown2 = setInterval(() => {
        if (timeLeft2 <= 0){
            clearInterval(countdown2);
            result2i()
        } else {
            updateTimerDisplay2();
            timeLeft2--;
        }
    }, 1000)
}

function updateTimerDisplay2() {
    const hours2 = Math.floor(timeLeft2 / 3600);
    const minutes2 = Math.floor((timeLeft2 % 3600) / 60);
    const seconds2 = timeLeft2 % 60;

    document.getElementById('hours2').textContent = String(hours2).padStart(2, '0');
    document.getElementById('minutes2').textContent = String(minutes2).padStart(2, '0');
    document.getElementById('seconds2').textContent = String(seconds2).padStart(2, '0');
}

let timeLeft3; 
let countdown3; 
function startTimer3(){
    timeLeft3 = 1 * 15 * 60;
    countdown3 = setInterval(() => {
        if (timeLeft3 <= 0){
            clearInterval(countdown3);
            result3i()
        } else {
            updateTimerDisplay3();
            timeLeft3--;
        }
    }, 1000)
}

function updateTimerDisplay3() {
    const hours3 = Math.floor(timeLeft3 / 3600);
    const minutes3 = Math.floor((timeLeft3 % 3600) / 60);
    const seconds3 = timeLeft3 % 60;

    document.getElementById('hours3').textContent = String(hours3).padStart(2, '0');
    document.getElementById('minutes3').textContent = String(minutes3).padStart(2, '0');
    document.getElementById('seconds3').textContent = String(seconds3).padStart(2, '0');
}

function result() {
    if (window.confirm(`Are you sure you want to submit your exam`)) {
        resultCard.style.display = 'block';
        let score = 0;
        const correctMark = 2
    
        // List of correct answer IDs
        var correctAnswers = ['correcta', 'correctb', 'correctc', 'correctd', 'correcte', 'correctf', 'correctg', 'correcth', 'correcti', 'correctj', 'correctk', 'correctl', 'correctm', 'correctn', 'correcto', 'correctp', 'correctq', 'correctr', 'corrects', 'correctt', 'correct_1', 'correct_2', 'correct_3', 'correct_4', 'correct_5', 'correct_6', 'correct_7', 'correct_8', 'correct_9', 'correct_10', 'correct_11', 'correct_12', 'correct_13', 'correct_14', 'correct_15'];
    
        // Loop through each correct answer ID
        for (var i = 0; i < correctAnswers.length; i++) {
            var correctAnswerElement = document.getElementById(correctAnswers[i]);
    
            // Check if the element is found and if it is checked
            if (correctAnswerElement && correctAnswerElement.checked) {
                score += correctMark;
            }
        }
    
        // document.getElementById('results').innerHTML = score;
    
        var results = score
        document.getElementById('results').innerHTML = results;
    }
}
function resulti() {
        resultCard.style.display = 'block';
        let score = 0;
        const correctMark = 2
    
        // List of correct answer IDs
        var correctAnswers = ['correcta', 'correctb', 'correctc', 'correctd', 'correcte', 'correctf', 'correctg', 'correcth', 'correcti', 'correctj', 'correctk', 'correctl', 'correctm', 'correctn', 'correcto', 'correctp', 'correctq', 'correctr', 'corrects', 'correctt', 'correct_1', 'correct_2', 'correct_3', 'correct_4', 'correct_5', 'correct_6', 'correct_7', 'correct_8', 'correct_9', 'correct_10', 'correct_11', 'correct_12', 'correct_13', 'correct_14', 'correct_15'];
    
        // Loop through each correct answer ID
        for (var i = 0; i < correctAnswers.length; i++) {
            var correctAnswerElement = document.getElementById(correctAnswers[i]);
    
            // Check if the element is found and if it is checked
            if (correctAnswerElement && correctAnswerElement.checked) {
                score += correctMark;
            }
        }
    
        // document.getElementById('results').innerHTML = score;
    
        var results = score
        document.getElementById('results').innerHTML = results;
}
    function result2() { 
        if (window.confirm(`Are you sure you want to submit your exam`)) {
            resultCard2.style.display = 'block';
            let score = 0;
        const correctMark = 2
        
            // List of correct answer IDs
            var correctAnswers = ['correct#', 'correct##', 'correct###', 'correct#v', 'correctv', 'correctv#', 'correctv##', 'correctv###', 'correct#x', 'correctx', 'correctx#', 'correctx##', 'correctx###', 'correctx#v', 'correctxv', 'correct_a1', 'correct_b1', 'correct_c1', 'correct_d1', 'correct_e1', 'correct_f1', 'correct_g1', 'correct_h1', 'correct_i1', 'correct_j1', 'correct_k1', 'correct_l1', 'correct_m1', 'correct_n1', 'correct_o1', 'correct_p1', 'correct_q1', 'correct_r1', 'correct_s1', 'correct_t1'];
        
            // Loop through each correct answer ID
            for (var i = 0; i < correctAnswers.length; i++) {
                var correctAnswerElement = document.getElementById(correctAnswers[i]);
        
                // Check if the element is found and if it is checked
                if (correctAnswerElement && correctAnswerElement.checked) {
                    score += correctMark;
                }
            }
        
            // document.getElementById('results').innerHTML = score;
        
            var results2 = score
            document.getElementById('results2').innerHTML = results2;
      } 
      }
      function result2i() { 
            resultCard2.style.display = 'block';
            let score = 0;
        const correctMark = 2
        
            // List of correct answer IDs
            var correctAnswers = ['correct#', 'correct##', 'correct###', 'correct#v', 'correctv', 'correctv#', 'correctv##', 'correctv###', 'correct#x', 'correctx', 'correctx#', 'correctx##', 'correctx###', 'correctx#v', 'correctxv', 'correct_a1', 'correct_b1', 'correct_c1', 'correct_d1', 'correct_e1', 'correct_f1', 'correct_g1', 'correct_h1', 'correct_i1', 'correct_j1', 'correct_k1', 'correct_l1', 'correct_m1', 'correct_n1', 'correct_o1', 'correct_p1', 'correct_q1', 'correct_r1', 'correct_s1', 'correct_t1'];
        
            // Loop through each correct answer ID
            for (var i = 0; i < correctAnswers.length; i++) {
                var correctAnswerElement = document.getElementById(correctAnswers[i]);
        
                // Check if the element is found and if it is checked
                if (correctAnswerElement && correctAnswerElement.checked) {
                    score += correctMark;
                }
            }
        
            // document.getElementById('results').innerHTML = score;
        
            var results2 = score
            document.getElementById('results2').innerHTML = results2;
      } 

function result3() {
    if (window.confirm(`Are you sure you want to submit your exam`)) {
        resultCard3.style.display = 'block';
        let score = 0;
        const correctMark = 2
    
        // List of correct answer IDs
        var correctAnswers = ['correct_16', 'correct_17', 'correct_18', 'correct_19', 'correct_20', 'correct_21', 'correct_22', 'correct_23', 'correct_24', 'correct_25', 'correct_26', 'correct_27', 'correct_28', 'correct_29', 'correct_30', 'correct_#16', 'correct_#17', 'correct_#18', 'correct_#19', 'correct_#20', 'correct_#21', 'correct_#22', 'correct_#23', 'correct_#24', 'correct_#25', 'correct_#26', 'correct_#27', 'correct_#28', 'correct_#29', 'correct_#30', 'correct_#31', 'correct_#32', 'correct_#33', 'correct_#34', 'correct_#35'];
    
        // Loop through each correct answer ID
        for (var i = 0; i < correctAnswers.length; i++) {
            var correctAnswerElement = document.getElementById(correctAnswers[i]);
    
            // Check if the element is found and if it is checked
            if (correctAnswerElement && correctAnswerElement.checked) {
                score += correctMark;
            }
        }
    
        // document.getElementById('results').innerHTML = score;
    
        var results3 = score
        document.getElementById('results3').innerHTML = results3;
      }
}
function result3i() {
        resultCard3.style.display = 'block';
        let score = 0;
        const correctMark = 2
    
        // List of correct answer IDs
        var correctAnswers = ['correct_16', 'correct_17', 'correct_18', 'correct_19', 'correct_20', 'correct_21', 'correct_22', 'correct_23', 'correct_24', 'correct_25', 'correct_26', 'correct_27', 'correct_28', 'correct_29', 'correct_30', 'correct_#16', 'correct_#17', 'correct_#18', 'correct_#19', 'correct_#20', 'correct_#21', 'correct_#22', 'correct_#23', 'correct_#24', 'correct_#25', 'correct_#26', 'correct_#27', 'correct_#28', 'correct_#29', 'correct_#30', 'correct_#31', 'correct_#32', 'correct_#33', 'correct_#34', 'correct_#35'];
    
        // Loop through each correct answer ID
        for (var i = 0; i < correctAnswers.length; i++) {
            var correctAnswerElement = document.getElementById(correctAnswers[i]);
    
            // Check if the element is found and if it is checked
            if (correctAnswerElement && correctAnswerElement.checked) {
                score += correctMark;
            }
        }
    
        // document.getElementById('results').innerHTML = score;
    
        var results3 = score
        document.getElementById('results3').innerHTML = results3;
      }

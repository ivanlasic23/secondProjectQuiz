
// Parts of code taken from youtube chanel of James Q Quick
const quiz = document.getElementById("quiz");
const questions = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("answer-value"));
const maxQ = quizQuestionsBands.length;
let nextQuestion = [];
let currentQuestions = {};
//Use for argument later in the code
let acceptingAnswers = false;


//Score & q number
let currentQuestion = document.getElementById("question-number");
let currentQ = 0;
let currentScore = document.getElementById("score");
currentScore.innerText = 0;
let score = 0;

//Band quiz start
function startBandQuiz() {
    currentQuestion.innerText = 1;
    nextQuestion = quizQuestionsBands;
    showQuestionBand();
}

// Display questions
function showQuestionBand() {

    if (nextQuestion.length === 0) {
        whichMessageToShow();
    }

    currentQ++;
    currentQuestion.innerText = `${currentQ}/${maxQ}`;

    const questionIndex = Math.floor(Math.random() * nextQuestion.length);
    currentQuestions = nextQuestion[questionIndex];
    questions.innerText = currentQuestions.question;

    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestions['choice' + number];
    });

    //Make sure we dont repeat the same question
    nextQuestion.splice(questionIndex, 1);

    acceptingAnswers = true;
}


// add event listener to answers

choices.forEach(choice => {
    choice.addEventListener("click", function (e) {
        if (!acceptingAnswers) return;

        acceptingAnswers = true;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        if (selectedAnswer == currentQuestions.correct) {
            incrementScore();
            this.innerText = "Correct";

        } else {
            this.innerText = "Incorrect";
        }
        
        //Give it time to show the correct answer and transition
        setTimeout(() => {
            showQuestionBand();
        }, 1500);

        // increment score
        function incrementScore(num) {
            num = 1;
            score += num;
            currentScore.innerText = score;

        }
    });
});

// Which message will be shown upon quiz completion
function whichMessageToShow() {
    if (score == maxQ) {
        quiz.innerHTML = `<h2 class="you-scored">Great Job! You are a true 80's fan</h2>
        <a href="questions.html" class="btn btn-finish">Play Again</a>`;
    } else if (score < maxQ) {
        quiz.innerHTML = `<h2 class="you-scored">You have scored ${score} out of ${maxQ}. We think you should study more</h2>
        <a href="study.html" class="btn btn-finish">Study</a>
        <a href="questions.html" class="btn btn-finish">Play Again</a>`;
    }
}
// call the function and start the quiz
startBandQuiz();
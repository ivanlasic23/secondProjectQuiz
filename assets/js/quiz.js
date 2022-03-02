const quizQuestionsBands = [{
        question: "Who was the lead singer for Queen?",
        choice1: "Robert Plant",
        choice2: "Freddie Mercury",
        choice3: "George Michael",
        choice4: "Seal",
        correct: 2,
    },

    {
        question: "Where does the popular band A-ha come from?",
        choice1: "Sweden",
        choice2: "Denmark",
        choice3: "Norway",
        choice4: "England",
        correct: 3,
    },

    {
        question: "What was Prince' best selling album of all time?",
        choice1: "Purple Rain",
        choice2: "1999",
        choice3: "Around the World in a Day",
        choice4: "Emancipation",
        correct: 1,
    },

    {
        question: "How many records have Boni Jovi sold worldwide?",
        choice1: "40 million",
        choice2: "50 million",
        choice3: "74 million",
        choice4: "130 million",
        correct: 4,
    },

    {
        question: "What are the names of Van Halen brothers?",
        choice1: "Johnnie & Freddie",
        choice2: "Alex & Eddie",
        choice3: "Ben & Jerry",
        choice4: "Jordan & Larry",
        correct: 2,
    },

    {
        question: "Where was band U2 formed?",
        choice1: "London",
        choice2: "Dublin",
        choice3: "Cork",
        choice4: "Liverpool",
        correct: 2,
    },

    {
        question: "Is this just ___?",
        choice1: "magic",
        choice2: "fantasy",
        choice3: "mercury",
        choice4: "landslide",
        correct: 2,
    },

    {
        question: "Ah, can't you see what I mean___?",
        choice1: "Ah, might as well jump",
        choice2: "Might as well lump",
        choice3: "Might as well stop",
        choice4: "None of the above",
        correct: 1,
    },

    {
        question: "I never meant to cause you any ___?",
        choice1: "gain",
        choice2: "main",
        choice3: "pain",
        choice4: "fame",
        correct: 3,
    },

    {
        question: "With or withour you____?",
        choice1: "I can't live",
        choice2: "I can't breathe",
        choice3: "I can't be",
        choice4: "I can't even",
        correct: 1,
    },

    {
        question: "We've got each other and that's a lot for love We'll give it a ____?",
        choice1: "jump",
        choice2: "life",
        choice3: "shot",
        choice4: "magic",
        correct: 3,
    },
    {
        question: "Take on me,____",
        choice1: "Take me on",
        choice2: "Take me out",
        choice3: "Take me there",
        choice4: "Take me take me",
        correct: 1,
    }
];

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

        let classToApply;

        if (selectedAnswer == currentQuestions.correct) {
            classToApply = "correct";
            incrementScore();
            this.innerText = "Correct";

        } else {
            classToApply = "incorrect";
            this.innerText = "Incorrect";
        }
        selectedChoice.parentElement.classList.add(classToApply);
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
        <a href="index.html" class="btn btn-finish">Play Again</a>`;
    } else if (score < maxQ) {
        quiz.innerHTML = `<h2 class="you-scored">You have scored ${score} out of ${maxQ}. We think you should study more</h2>
        <a href="study.html" class="btn btn-finish">Study</a>
        <a href="index.html" class="btn btn-finish">Play Again</a>`;
    }
}

startBandQuiz();
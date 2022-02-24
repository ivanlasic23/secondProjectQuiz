const quizQuestionsBands = [{
        question: "Who was the lead singer for Queen?",
        choice1: "Robert Plant",
        choice2: "Freddie Mercury",
        choice3: "George Michael",
        choice4: "Seal",
        correct: "b",
    },

    {
        question: "Where does the popular band A-ha come from?",
        choice1: "Sweden",
        choice2: "Denmark",
        choice3: "Norway",
        choice4: "England",
        correct: "c",
    },

    {
        question: "What was Prince' best selling album of all time?",
        choice1: "Purple Rain",
        choice2: "1999",
        choice3: "Around the World in a Day",
        choice4: "Emancipation",
        correct: "a",
    },

    {
        question: "How many records have Boni Jovi sell worldwide?",
        choice1: "40 million",
        choice2: "50 million",
        choice3: "74 million",
        choice4: "130 million",
        correct: "d",
    },

    {
        question: "What are the names of Van Halen brothers?",
        choice1: "Johnnie & Freddie",
        choice2: "Alex & Eddie",
        choice3: "Ben & Jerry",
        choice4: "Jordan & Larry",
        correct: "b",
    },

    {
        question: "Where was band U2 formed?",
        choice1: "London",
        choice2: "Dublin",
        choice3: "Cork",
        choice4: "Liverpool",
        correct: "b",
    }
]

const quizQuestionsLyrics = [{
        question: "Is this just __________?",
        choice1: "magic",
        choice2: "fantasy",
        choice3: "mercury",
        choice4: "landslide",
        correct: "b",
    },

    {
        question: "Ah, can't you see what I mean__________?",
        choice1: "Ah, might as well jump",
        choice2: "Might as well lump",
        choice3: "Might as well stop",
        choice4: "None of the above",
        correct: "a",
    },

    {
        question: "I never meant to cause you any __________?",
        choice1: "gain",
        choice2: "main",
        choice3: "pain",
        choice4: "fame",
        correct: "c",
    },

    {
        question: "With or withour you_____________?",
        choice1: "I can't live",
        choice2: "I can't breathe",
        choice3: "I can't be",
        choice4: "I can't even",
        correct: "a",
    },

    {
        question: "We've got each other and that's a lot for love We'll give it a ____?",
        choice1: "jump",
        choice2: "life",
        choice3: "shot",
        choice4: "magic",
        correct: "c",
    }
]
//******************************************************************************************************* */
/*let aAnswer = document.getElementById("answer-a");
let bAnswer = document.getElementById("answer-b");
let cAnswer = document.getElementById("answer-c");
let dAnswer = document.getElementById("answer-d");*/


const quiz = document.getElementById("quiz");
const questions = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("answer-value"));
//const answerValue = document.getElementsByClassName("answer-value");
const maxQ = 6;
let nextQuestion = [];
let currentQuestions={};
let acceptingAnswers = false;


//Score & q number
let currentQuestion = document.getElementById("question-number");
let currentQ=0;
let currentScore = document.getElementById("score");
currentScore.innerText=0;

//Band quiz start


function startBandQuiz() {
    currentQuestion.innerText = 1;
    currentScore = 0;
    nextQuestion = quizQuestionsBands;
    showQuestionBand()

}

// Display questions
function showQuestionBand(){
    /*let quizData = quizQuestionsBands[currentQuestion]
        questions.innerText = quizData.question;
        aAnswer.innerText = quizData.a;
        bAnswer.innerText = quizData.b;
        cAnswer.innerText = quizData.c;
        dAnswer.innerText = quizData.d;*/
    
    if (nextQuestion.length>maxQ){
        //end game use innerhtml for a div of html and write it in backtics game over you scored x
        
       /* quiz.innerHTML=
    `<h1>Congratulations you have scored ${currentScore} </h1>`*/}

    currentQ++;
    currentQuestion.innerText=`${currentQ}/${maxQ}`;

    const questionIndex = Math.floor(Math.random()*nextQuestion.length);
    currentQuestions = nextQuestion[questionIndex];
    questions.innerText=currentQuestions.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestions['choice' + number];
    })

    nextQuestion.splice(questionIndex, 1);

    acceptingAnswers=true;
    console.log(currentQuestions.question)
    
}
    


    console.log(quizQuestionsBands)

    
    









startBandQuiz()




//Lyrics quiz function
/*function startLyricsQuiz() {
    let currentQuestion = 1;
    let currentScore = 0;
    showQuestionLyrics()
}

function showQuestionLyrics() {
    let quizDatab = quizQuestionsLyrics[currentQuestionb]
    questions.innerText = quizDatab.question;
    aAnswer.innerText = quizDatab.a;
    bAnswer.innerText = quizDatab.b;
    cAnswer.innerText = quizDatab.c;
    dAnswer.innerText = quizDatab.d;   
}*/






























let answer = document.getElementsByClassName("answer-div");

for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", function () {
        console.log("Clicked");
        alert("Clicked")
    });
}


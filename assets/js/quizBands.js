const quizQuestionsBands = [{
        question: "Who was the lead singer for Queen?",
        a: "Robert Plant",
        b: "Freddie Mercury",
        c: "George Michael",
        d: "Seal",
        correct: "b",
    },

    {
        question: "Where does the popular band A-ha come from?",
        a: "Sweden",
        b: "Denmark",
        c: "Norway",
        d: "England",
        correct: "c",
    },

    {
        question: "What was Prince' best selling album of all time?",
        a: "Purple Rain",
        b: "1999",
        C: "Around the World in a Day",
        d: "Emancipation",
        correct: "a",
    },

    {
        question: "How many records have Boni Jovi sell worldwide?",
        a: "40 million",
        b: "50 million",
        c: "74 million",
        d: "130 million",
        correct: "d",
    },

    {
        question: "What are the names of Van Halen brothers?",
        a: "Johnnie & Freddie",
        b: "Alex & Eddie",
        c: "Ben & Jerry",
        d: "Jordan & Larry",
        correct: "b",
    },

    {
        question: "Where was band U2 formed?",
        a: "London",
        b: "Dublin",
        c: "Cork",
        d: "Liverpool",
        correct: "b",
    }
]

const quizQuestionsLyrics = [{
        question: "Is this just __________?",
        a: "magic",
        b: "fantasy",
        c: "mercury",
        d: "landslide",
        correct: "b",
    },

    {
        question: "Ah, can't you see what I mean__________?",
        a: "Ah, might as well jump",
        b: "Might as well lump",
        c: "Might as well stop",
        d: "None of the above",
        correct: "a",
    },

    {
        question: "I never meant to cause you any __________?",
        a: "gain",
        b: "main",
        c: "pain",
        d: "fame",
        correct: "c",
    },

    {
        question: "With or withour you_____________?",
        a: "I can't live",
        b: "I can't breathe",
        c: "I can't be",
        d: "I can't even",
        correct: "a",
    },

    {
        question: "We've got each other and that's a lot for love We'll give it a ____?",
        a: "jump",
        b: "life",
        c: "shot",
        d: "magic",
        correct: "c",
    }
]
//******************************************************************************************************* */
let aAnswer = document.getElementById("answer-a");
let bAnswer = document.getElementById("answer-b");
let cAnswer = document.getElementById("answer-c");
let dAnswer = document.getElementById("answer-d");


const quiz = document.getElementById("quiz");
const questions = document.getElementById("question");
const answerValue = document.getElementsByClassName("answer-value");
const maxQ = 5;
let nextQuestion = [];


//Score & q number
let currentQuestion = document.getElementById("question-number");
currentQuestion.innerText=1;
let currentScore = 0;

//Band quiz start


function startBandQuiz() {
    currentQuestion = 1;
    currentScore = 0;
    nextQuestion = quizQuestionsBands;
    showQuestionBand()

}

// Display questions
function showQuestionBand(){
    let quizData = quizQuestionsBands[currentQuestion]
        questions.innerText = quizData.question;
        aAnswer.innerText = quizData.a;
        bAnswer.innerText = quizData.b;
        cAnswer.innerText = quizData.c;
        dAnswer.innerText = quizData.d;
    
    if (currentQuestion>maxQ){
        //end game
    }

    currentQuestion++;
    currentQuestion.innerText=`${currentQuestion}/${maxQ}`;

    
    }
    









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

console.log(answer)
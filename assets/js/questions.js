/*GLOBAL VARIABLES*/

const quizQ = document.getElementById("quiz-question");
const quizA = Array.from(document.getElementsByClassName("quiz-answer"));
const tallyQ = document.getElementById("questionTally");
const tallyS = document.getElementById("scoreTally");
const currentProg = document.getElementById("progression");
const loadingSpinner = document.getElementById("loading-spinner");
const quiz = document.getElementById("quiz");

let currentQ = {};
let answerDelay = false;
let score = 0;
let qNum = 0;
let time = 10;
let availableQ = [];
let artiquests = [];

const correctPoints = 10;
const incorrectPoints = 3;
const totalQuests = 10;

/*FETCH API*/


fetch("https://opentdb.com/api.php?amount=10&category=25&type=multiple")
    .then(function (res) {
        return res.json();
    })

    .then(function (loadedQuest) {
        quizQuests = loadedQuest.results.map(function (loadedQuest) {
            const convertedQuest = {
                question: loadedQuest.question,
            };

            const possibleAnswers = [...loadedQuest.incorrect_answers];
            convertedQuest.answer = Math.floor(Math.random() * 4) + 1;
            possibleAnswers.splice(
                convertedQuest.answer - 1,
                0,
                loadedQuest.correct_answer
            );

            possibleAnswers.forEach(function (answer, index) {
                convertedQuest['answer' + (index + 1)] = answer;
            });
            return convertedQuest;
        });

        gameBegin();
    })


/*GAME BEGIN FUNCTION*/


function gameBegin() {
    score = 0;
    qNum = 0;
    availableQ = [...artiquests];
    time = 10;
    nextQuest();
    quiz.classList.remove("d-none");
    loadingSpinner.classList.add("d-none");
};

/*NEXT QUESTION FUNCTION*/

function nextQuest() {

    if (availableQ.length === 0 || qNum >= totalQuests) {
        localStorage.setItem("newScore", score);
        return window.location.assign("completed.html");
    }

    qNum++;
    currentProg.style.width = `${((qNum - 1) / totalQuests) * 100}%`;
    tallyQ.innerHTML = qNum + "/" + totalQuests;

    const qCatalogue = Math.floor(Math.random() * availableQ.length);
    currentQ = availableQ[qCatalogue];
    quizQ.innerHTML = currentQ.question;

    quizA.forEach(function (answer) {
        const number = answer.dataset['number'];
        answer.innerHTML = currentQ['answer' + number];
    });

    availableQ.splice(qCatalogue, 1);
    answerDelay = true;

    countDown();
};

/*COUNTDOWN TIMER FUNCTION*/

countDown = function () {

    timer.innerHTML = time;

    if (time < 1) {
        time = 10;
        nextQuest();
        decreaseScore(incorrectPoints);
    }
    else (time = time - 1)
}

setInterval("countDown()", 1000);

/*COLOUR CHANGE FUNCTION*/

quizA.forEach(function (answer) {
    answer.addEventListener("click", function (e) {
        if (!answerDelay) return;
        answerDelay = false;

        const chosenAnswer = e.target;
        const chosenCorrect = chosenAnswer.dataset["number"];

        const colorChange = chosenCorrect == currentQ.answer ? "correct" : "incorrect";

        if (colorChange === "correct") {
            increaseScore(correctPoints);
        }

        if (colorChange === "incorrect") {
            decreaseScore(incorrectPoints);
        }

        chosenAnswer.parentElement.classList.add(colorChange);

        setTimeout(function () {
            chosenAnswer.parentElement.classList.remove(colorChange);
            time = 10;
            nextQuest();
        }, 1200);
    });
});

/*INCREASE/DECREASE SCORE FUNCTION*/


increaseScore = function (num) {
    score += num;
    tallyS.innerText = score;
};

decreaseScore = function (num) {
    if(score >= 3) {
        score -= num;
        tallyS.innerText = score;
    }
}
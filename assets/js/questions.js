/*VARIABLES*/

// quizQ & quizA will reference the quiz questions and quiz answers.
// tallyQ & tallyS will reference the number of questions a user is currently on and the user's score.
// currentProg will help fill the progress bar within questions.html.
// loadingSpinnder & quiz will be responsible for the loading spinner appearing and disappearing when we are loading questions from the API.

const quizQ = document.getElementById("quiz-question");
const quizA = Array.from(document.getElementsByClassName("quiz-answer"));
const tallyQ = document.getElementById("questionTally");
const tallyS = document.getElementById("scoreTally");
const currentProg = document.getElementById("progression");
const loadingSpinner = document.getElementById("loading-spinner");
const quiz = document.getElementById("quiz");

// The currentQ variable will hold the current question.
// answerDelay will cause a slight delay before a user can chose another answer.
// The score variable will be the users score which will start at 0.
// qNum will be which question number the user is on.
// time is be how long a user has to answer each question within the game.
// availableQ will be an available copy of our question set.
// quizQuests contains questions in the form of objects. Each object has one question and 4 possible answers. 

let currentQ = {};
let answerDelay = false;
let score = 0;
let qNum = 0;
let time = 10;
let availableQ = [];
let quizQuests = [];

// correctPoints is how many points will be awarded for a correct answer--*/
// incorrectPoints is how many points will be deducted for an incorrect answer--*/
// totalQuests sets the limit for how many questions a user will be given--*/

const correctPoints = 10;
const incorrectPoints = 3;
const totalQuests = 10;

/*FETCH API*/

// Fetch is used to gather data from a free quiz database API (https://opentdb.com/).
// I have used JSON to transform the API data into a format I can use.
// That data is stored in loadedQuest initially.
// convertedQuest variable created to hold formatted data.
// possibleAnswers created to hold answers and Math used to put them in random order.
// Splice used on correct answer which is placed into random location.
// Answers are assigned index so they appear on screen in order generated.
// Please see acknowledgements section of README.md file.

fetch("https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple")
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

// gameBegin function begins game with score 0, qusetion 0, and it holds an array of questions.
// gameBegin function begins with time 10 seconds, and it called the nextQuest function.
// gameBegin also adds and removes the "d-none" class which enables loading spinner to show when necessary.

gameBegin = function () {
    score = 0;
    qNum = 0;
    availableQ = [...quizQuests];
    time = 10;
    nextQuest();
    quiz.classList.remove("d-none");
    loadingSpinner.classList.add("d-none");
};

/*NEXT QUESTION FUNCTION*/

// If no more questions or question limit is reached, set score and load completed.html page.
// qNum incremented by 1 until totalQuests limit reached.
// Progress bar filled by styling width of css attribute as a percentage.
// qNum / totalQuests displayed as tallyQ in html file.
// qCatalogue created to hold random question decided by Math.
// currentQ is available question decided by qCatalogue.
// quizQ then displays currentQ in html.
// Data-set number read in html file and linked to answer. currentQ answer and number displayed in html file.
// Splice used for question just used so that it's not displayed again.
// countDown function called for timer.
// Please see acknowledgements section of README.md file.

nextQuest = function () {

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

// Time displayed within html.
// If time is less than 1, reset time 10, call next question and decrease user score.
// Else reduce time by 1.
// Interval set is 1000ms (1 second).

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

// Users stopped from clicking answer if website not ready.
// Colour of button will change green if correct answer chosen. Points will increase.
// Colour of button will change red if incorrect answer is chosen. Points will decrease.
// setTimeout used to pause colour change for 1200ms. Time reset to 10.
// nextQuest called after 1200ms.

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

// Two functions used to increase and decrease score. Both called in other functions.

increaseScore = function (num) {
    score += num;
    tallyS.innerText = score;
};

decreaseScore = function (num) {
    score -= num;
    tallyS.innerText = score;
}
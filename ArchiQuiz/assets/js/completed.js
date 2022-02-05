// name variable holds users name
// saveScore variable will allow us to enable and disable the Save Score button.
// endScore variable will display message containing final user's score and additional text in the heading tag on completed.html.
// newScore variable is the score saved in local storage to be displayed in html page.
// totalResults variable is the max number of entries allowed on the leaderboard.
// results variable converts data in local storage from a string to an object. Empty array added to avoid null console log entry.
const name = document.getElementById("name");
const saveScore = document.getElementById("saveScore");
const endScore = document.getElementById("endScore");
const newScore = localStorage.getItem("newScore");
const totalResults = 10;
const results = JSON.parse(localStorage.getItem("results")) || [];

// This text will display on completed.html page
endScore.innerText = "You Scored:" + " " + newScore + "!";

// Code to disable Save Score button when name field is empty. Keyup used to enable button.
name.addEventListener("keyup", function () {
    saveScore.disabled = !name.value;
});

// This function takes the name and score, sorts it, possibly splices it, converts it to a string and saves it to local storage then loads leaderboard
saveToBoard = function (e) {
    e.preventDefault();

    const record = {
        name: name.value,
        score: newScore
    };

    // record values pushed to results variable.
    results.push(record);

    // Function added that sorts scores. Higher scores will be placed at top of leaderboard.
    results.sort(function (a, b) {
        return b.score - a.score;
    });

    // Splice bottom score if user achieves greater score. Only 10 scores allowed on leaderboard.
    results.splice(10);

    // Convert results back to a string so they can be saved in local storage.
    localStorage.setItem("results", JSON.stringify(results));

    // leaderboard.html loaded when Save Score button clicked.
    window.location.assign("leaderboard.html");
};
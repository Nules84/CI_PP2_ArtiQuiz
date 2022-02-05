// lb-list variable will display table containing names and scores within leaderboard.html
// leaderboard variable takes data from local storage and converts it to an object

const lbList = document.getElementById("lb-list");
const leaderboard = JSON.parse(localStorage.getItem("results")) || [];

lbList.innerHTML = leaderboard

    // Classes created here. These classes styled in css. This is what makes the table within leaderboard.html.
    .map(function (score) {
        return `<li class="lb-name">${score.name}</li>` + `<li class="lb-score">${score.score}</li>`;
    })

    .join(""); 
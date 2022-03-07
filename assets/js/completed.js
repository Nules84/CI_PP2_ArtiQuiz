const name = document.getElementById("name");
const saveScore = document.getElementById("saveScore");
const endScore = document.getElementById("endScore");
const newScore = localStorage.getItem("newScore");
const totalResults = 10;
const results = JSON.parse(localStorage.getItem("results")) || [];

// This text will display on completed.html page
endScore.innerText = "You Scored:" + " " + newScore + "!";

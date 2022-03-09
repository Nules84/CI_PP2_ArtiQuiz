const endScore = document.getElementById("endScore");
const newScore = localStorage.getItem("newScore");

// This text will display on completed.html page
endScore.innerText = "You Scored:" + " " + newScore + "!";
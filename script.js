
var ties = 0;
var wins = 0;
var losses = 0;
var options = ["r", "p", "s"];

document.onkeyup = function () {
   
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("userChoice").innerHTML = userChoice;
    console.log(userChoice);

    var computerChoice = options[Math.floor(Math.random() * options.length)];
    document.getElementById("computerChoice").innerHTML = computerChoice;
    console.log(computerChoice);

    
    if (userChoice ===computerChoice) {
        ties++;
        document.getElementById("ties").innerHTML = ties;
        console.log("ties " +ties);
    
    }

    if (userChoice === "r" && computerChoice === "p") {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        console.log("losses " +losses);
    }
    if (userChoice === "p" && computerChoice === "s") {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        console.log("losses " + losses);
    }
    if (userChoice === "s" && computerChoice === "r") {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        console.log("losses " + losses);
    }
    if (userChoice === "r" && computerChoice === "s") {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        console.log("wins " + wins);
    }
    if (userChoice === "p" && computerChoice === "r") {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        console.log("wins " + wins);
    }
    if (userChoice === "s" && computerChoice === "p") {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        console.log("wins " + wins);
    }

    if (userChoice != "r" | "s" | "p") {
        document.getElementById("userChoice").innerHTML=("please choose r, p or s")
    }
   
    

    
    }
      
    


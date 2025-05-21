const rockbutton = document.querySelector('#Rock');
const paperbutton = document.querySelector('#Paper');
const scissorsbutton = document.querySelector('#Scissors');
const displayComputerChoice = document.querySelector('#computerChoice')
let yourChoice;
const choices = ["rock","paper","scissors"];
const displayYourChoice = document.querySelector('#yourChoice');
const displayResults = document.querySelector('#results');

console.log(choices[1]);
console.log(rockbutton,paperbutton,scissorsbutton)

rockbutton.addEventListener("click", selectRock)
paperbutton.addEventListener("click", selectPaper)
scissorsbutton.addEventListener("click", selectScissors)

function selectRock() {
    yourChoice = "rock";
    console.log('Chose Rock');
    computerChoice();
}
function selectPaper() {
    yourChoice = "paper";
    console.log('Chose Paper');
    computerChoice();
}
function selectScissors() {
    yourChoice = "scissors";
    console.log('Chose Scissors');
    computerChoice();
}

function computerChoice() {
    let computerNumber = choices[Math.floor(Math.random() * 3)];
    console.log(computerNumber)
    displayYourChoice.innerHTML = yourChoice;
    displayComputerChoice.innerHTML = computerNumber;
    if (yourChoice === computerNumber) {
        displayResults.innerHTML = "Its a draw!"
    } else if (
        computerNumber === "rock" && yourChoice === "paper") {
        displayResults.innerHTML = "You win!";
    } else if (computerNumber === "paper" && yourChoice === "scissors") {
        displayResults.innerHTML = "You win!";
    } else if (computerNumber === "paper" && yourChoice === "rock") {
        displayResults.innerHTML = "You win!";
    } else {
        displayResults.innerHTML = "You lose!";
    }
}
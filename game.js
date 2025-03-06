let humanScore = 0
let computerScore = 0
const winningScore = 5

function getComputerChoice(){
    let choice = Math.random();
    if (choice < 0.33){
        return "Rock";
    } else if(choice > 0.66){
        return "Paper";
    } else{
        return "Scissor";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    document.getElementById("computer").textContent = `${computerChoice}`;
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `Draw! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        resultText = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    document.getElementById("result").textContent = resultText;
    document.getElementById("score").textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
}

function checkWinner() {
    if (humanScore === winningScore) {
        document.getElementById("winner").textContent = "🎉 You win the game! 🎉";
        endGame();
    } else if (computerScore === winningScore) {
        document.getElementById("winner").textContent = "😞 Computer wins the game! 😞";
        endGame();
    }
}

function endGame() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
    document.getElementById("reset").style.display = "block";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("result").textContent = "Make your move!";
    document.getElementById("score").textContent = "Player: 0 | Computer: 0";
    document.getElementById("winner").textContent = "";
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
    document.getElementById("reset").style.display = "none";
}

document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissor").addEventListener("click", () => playRound("Scissor"));
document.getElementById("reset").addEventListener("click", resetGame);
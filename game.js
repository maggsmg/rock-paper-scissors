function getComputerChoice(){
    let choice = Math.random();
    let pick;
    if (choice < 0.33){
        pick = "rock";
    }
    else if(choice > 0.66){
        pick = "paper";
    }
    else{
        pick = "scissor";
    }
    return pick
}

function getHumanChoice(){
    let humanchoice = prompt("What's your choice?")
    let yourChoice = humanchoice.toLowerCase()
    return yourChoice
    
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanchoice,computerChoice){
        if(humanchoice == "rock" && computerChoice == "scissor"){
            console.log("You win! Rock beats scissor")
            humanScore++
        }
        else if(humanchoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats rock")
            computerScore++
        }
        else if(humanchoice == "rock" && computerChoice == "rock"){
            console.log("Draw")
        }
        if(humanchoice == "paper" && computerChoice == "scissor"){
            console.log("You lose! Scissor beats paper")
            computerScore++
        }
        else if(humanchoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats rock")
            humanScore++
        }
        else if(humanchoice === "paper" && computerChoice === "paper"){
            console.log("Draw")
        }
        if(humanchoice === "scissor" && computerChoice === "scissor"){
            console.log("Draw")

        }
        else if(humanchoice === "scissor" && computerChoice === "paper"){
            console.log("You win! Scissor beats paper")
            humanScore++
        }
        else if(humanchoice === "scissor" && computerChoice === "rock"){
            console.log("You lose! Rock beats scissor")
            computerScore++
        }
    }


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
      }
    
    if(humanScore > computerScore){
        console.log("You win! Your score: " + humanScore + " Computer score: " + computerScore) 
    }
    else{
        console.log("You lose! Your score: " + humanScore + " Computer score: " + computerScore)
    }
}

playGame()
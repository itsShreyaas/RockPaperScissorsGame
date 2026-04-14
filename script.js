const choices=["rock","paper","scissors"];  
const playerchoice=document.getElementById('playerDisplay');
const computerchoice=document.getElementById('computerDisplay');
const result=document.getElementById('resultDisplay');
const playerscore=document.getElementById('playerScore');
const computerscore=document.getElementById('computerScore');
let playerScore=0;
let computerScore=0;

function playGames(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let resultText="";

    if(playerChoice===computerChoice){
        resultText="It's a tie!";
    } else{
        switch(playerChoice){
            case "rock":
                resultText=computerChoice==="scissors" ? "You win!" : "You lose!";
                break;
            case "paper":
                resultText=computerChoice==="rock" ? "You win!" : "You lose!";
                break;
            case "scissors":
                resultText=computerChoice==="paper" ? "You win!" : "You lose!";
                break;
        }
    }

    playerchoice.textContent=`PLAYER: ${playerChoice}`;
    computerchoice.textContent=`COMPUTER: ${computerChoice}`;
    result.textContent=resultText;

    resultDisplay.classList.remove("greenText", "redText");
    if(resultText==="You win!"){
        playerScore++;
        resultDisplay.classList.add("greenText");
    } else if(resultText==="You lose!"){
        computerScore++;
        resultDisplay.classList.add("redText");
    }
    playerscore.textContent=playerScore;
    computerscore.textContent=computerScore;

}
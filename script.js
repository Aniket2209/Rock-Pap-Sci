const ROCK="rock";
const PAPER="paper";
const SCISSOR="scissor";
let humanScore=0;
let computerScore=0;

function getComputerChoice()
{
    let choice=Math.floor(Math.random()*10);
    while(choice%3!==0 || choice===0)
    {
        choice=Math.floor(Math.random()*10);
    }
    if(choice===3)
    {
        return ROCK;
    }
    else if(choice===6)
    {
        return PAPER;
    }
    else if(choice===9)
    {
        return SCISSOR;
    }
}
function getHumanChoice()
{
    let choice=prompt("Rock, Paper, Scissors!");
    const choiceign=choice.toLowerCase();
    if(choiceign==="rock")
    {
        return ROCK;
    }
    else if(choiceign==="paper")
    {
        return PAPER;
    }
    else if(choiceign==="scissor")
    {
        return SCISSOR;
    }
    else
    {
        return "Invalid Choice!!";
    }
}
function playRound(humanChoice, computerChoice)
{
    if(humanChoice===computerChoice)
    {
        console.log("Draw!!!");
        humanScore++;
        computerScore++;
    }
    else if(humanChoice==="rock")
    {
        if(computerChoice==="paper")
        {
            console.log("You lose!! Paper beats Rock");
            computerScore++;
        }
        else if(computerChoice==="scissor")
        {
            console.log("Congratulations you win! Rock beats Scissors");
            humanScore++;
        }
    }
    else if(humanChoice==="paper")
    {
        if(computerChoice==="rock")
        {
            console.log("Congratulations you win! Paper beats Rock");
            humanScore++;
        }
        else if(computerChoice==="scissor")
        {
            console.log("You Lose! Scissors beat Paper");
            computerScore++;
        }
    }
    else if(humanChoice==="scissor")
    {
        if(computerChoice==="paper")
        {
            console.log("Congratulations you win! Scissors beat Paper");
            humanScore++;
        }
        else if(computerChoice==="rock")
        {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    }
}

function playGame()
{
    for(let i=0;i<5;i++)
    {
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Human Score is ${humanScore}`);
    console.log(`Computer Score is ${computerScore}`);
    if(humanScore>computerScore)
    {
        console.log("Congratulations! You won");
    }
    else if(computerScore>humanScore)
    {
        console.log("Sorry you lose!");
    }
}

playGame();
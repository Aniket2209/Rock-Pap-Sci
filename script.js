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
function playRound(humanChoice, computerChoice)
{
    if(humanChoice===computerChoice)
    {
        humanScore++;
        computerScore++;
        return "Draw!!!";
    }
    else if(humanChoice==="rock")
    {
        if(computerChoice==="paper")
        {
            computerScore++;
            return "You lose!! Paper beats Rock";
        }
        else if(computerChoice==="scissor")
        {
            humanScore++;
            return "Congratulations you win! Rock beats Scissors";
        }
    }
    else if(humanChoice==="paper")
    {
        if(computerChoice==="rock")
        {
            humanScore++;
            return "Congratulations you win! Paper beats Rock";
        }
        else if(computerChoice==="scissor")
        {
            computerScore++;
            return "You Lose! Scissors beat Paper";
        }
    }
    else if(humanChoice==="scissor")
    {
        if(computerChoice==="paper")
        {
            humanScore++;
            return "Congratulations you win! Scissors beat Paper";
        }
        else if(computerChoice==="rock")
        {
            computerScore++;
            return "You lose! Rock beats Scissors";
        }
    }
}

function updateUI(message)
{
    document.querySelector("#result").textContent = message;
    document.querySelector("#score").textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
}

function checkWinner()
{
    if(humanScore >= 5 && computerScore >= 5)
    {
        document.querySelector("#result").textContent = "It's a DRAW!!!";
        document.querySelectorAll("button").forEach(button => button.disabled = true);
        const draw = document.createElement("img");
        draw.src = "images/pngtree-shake-hands-png-image_8742463";
        draw.alt = "Its a draw image!!";
        draw.width = "200";
        draw.heigth = "200";
        draw.style.textAlign = "center";
        document.body.appendChild(draw);
    }
    if(humanScore >= 5)
    {
        document.querySelector("#result").textContent = "Congratulations!! You win";
        document.querySelectorAll("button").forEach(button => button.disabled = true);
        const human = document.createElement("img");
        human.src = "images/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector";
        human.alt = "Human";
        human.width = "200";
        human.heigth = "200";
        draw.style.textAlign = "center";
        document.body.appendChild(human);
    }
    else if(computerScore >= 5)
    {
        document.querySelector("#result").textContent = "Sorry, you lose!!";
        document.querySelectorAll("button").forEach(button => button.disabled = true);
        const computer = document.createElement("img");
        computer.src = "images/cartoon-smiling-desktop-computer-19057432";
        computer.alt = "Computer";
        computer.width = "200";
        computer.heigth = "200";
        draw.style.textAlign = "center";
        document.body.appendChild(computer);
    }
}

const h1 = document.querySelector("h1");
h1.style.textAlign = "center";
const container1 = document.querySelector(".container1");
container1.style.textAlign = "center";
const container2 = document.querySelector(".container2");
container2.style.textAlign = "center";


document.querySelector("#rock").addEventListener('click', () => {
    const result = playRound(ROCK, getComputerChoice());
    updateUI(result);
    checkWinner();
});

document.querySelector("#paper").addEventListener('click', () => {
    const result = playRound(PAPER, getComputerChoice());
    updateUI(result);
    checkWinner();
});

document.querySelector("#scissor").addEventListener('click', () => {
    const result = playRound(SCISSOR, getComputerChoice());
    updateUI(result);
    checkWinner();
});
const getUserChoice = (userinput)=>{
    var userChoice = prompt('rock, scissors or paper?');
userInput = userChoice.toLowerCase();
if (userInput ==='rock' || userInput ==='paper' || userInput === 'scissors'){
    return userInput;
} else {
    console.log('Enter either rock, paper, or scissors.');
}
}
const getComputerChoice = ()=>{
    let randomNumber = Math.floor(Math.random(paper) * 3);
    switch (randomNumber){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'sciccors';
    }
}
const determineWinner = (userChoice, computerChoice) =>{
if(userChoice === computerChoice){
return "It's a tie!"
}
if(userChoice === 'rock'){
if(computerChoice === 'paper');
return 'You Lose!';
}
if(userChoice === 'paper'){
    if(computerChoice === 'scissors');
    return 'You Lose!';
}
if(userChoice === 'scissors'){
    if(computerChoice === 'rock');
    return 'You Lose!';
}else{
    return 'You Won!';
}
}
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw:' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
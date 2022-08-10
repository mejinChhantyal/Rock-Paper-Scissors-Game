const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'|| userInput === 'scissors' || userInput === 'paper')
        return userInput;
    else{
        console.log('Error please type one of the following: rock, scissors, paper');
    }
}
// console.log(getUserChoice('dog'))

const getcomputerChoice = () => {
    randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'rock'
        case 1:
            return 'scissors'
        case 2:
            return 'paper'
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'it a tie'
    }
    if(userChoice === 'rock'){
        if( computerChoice === 'paper'){
            return 'computer won'
    }else{
            return 'you win!'
    } 
}
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'computer won'
    }else{
            return 'you win!'
    } 
}
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
        return 'computer won'
    }else{
        return 'you win!'
    } 
    }
}

const playGame = () => {
    const userChoice = getUserChoice('paper')
    const computerChoice = getcomputerChoice()
    console.log('You throw: `' + userChoice)
    console.log('Computer throw: ' + computerChoice)
    
    console.log(determineWinner(userChoice, computerChoice))
}
playGame();

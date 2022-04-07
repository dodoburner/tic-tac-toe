function computerPlay() {
    let response= ['rock', 'paper' ,'scissors'];
    return response[Math.floor(Math.random()*response.length)]
}
let computerSelection;
let playerSelection;
let playerCount=0;
let computerCount=0;


function playRound() {
    if (playerSelection=='paper' && computerSelection=='rock') {
        playerCount++
        return 'You win! Paper beats rock'
    }
    else if (playerSelection=='paper' && computerSelection=='scissors') {
        computerCount++
        return 'You lose! Scissors beat paper'
    }
    else if (playerSelection=='paper' && computerSelection=='paper') {
        return 'It\'s a draw. Play again'
    }
    else if (playerSelection=='rock' && computerSelection=='paper') {
        computerCount++
        return 'You lose! Paper beats rock'
    }
    else if (playerSelection=='rock' && computerSelection=='scissors') {
        playerCount++
        return 'You win! Rock beats scissors'
    }
    else if (playerSelection=='rock' && computerSelection=='rock') {
        return 'It\'s a draw. Play again'
    }
    else if (playerSelection=='scissors' && computerSelection=='rock') {
        computerCount++
        return 'You lose! Rock beats scissors'
    }
    else if (playerSelection=='scissors' && computerSelection=='paper') {
        playerCount++
        return 'You win! Scissors beats paper'
    }
    else if (playerSelection=='scissors' && computerSelection=='scissors') {
        return 'It\'s a draw. Play again'
    }
}


function game() {
    computerSelection= computerPlay();
    const result= document.getElementById('result');
    result.textContent= playRound()
     + ' Player:' + playerCount + ' Computer:' + computerCount;
     if (playerCount == 5) {
        result.textContent= 'Congratulations! You win';
    }
    else if (computerCount == 5) {
        result.textContent == 'You Lose! Try again'
    }
    if (playerCount == 5 || computerCount == 5) {
        playerCount= 0;
        computerCount= 0;
    }
}

const buttons= document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',
function(e) {
    playerSelection= this.id;
    game()
}))













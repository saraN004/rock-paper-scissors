choice = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    const randomElement = choice[Math.floor(Math.random() * choice.length)];
    return randomElement
}

function playRound(button_value) {
    let winner;
    // getting the user's choice
    user_choice = button_value;
    // get the computer's choise
    computer_choice = getComputerChoice();
    //output the result
    //when its a tie
    if (user_choice == computer_choice) {
        const result = document.querySelector('.result');
        const resultText = document.createElement("h3");
        resultText.textContent = `its a tie!, both players chose ${user_choice}`;
        result.appendChild(resultText);
        setTimeout(() => {
            resultText.style.display = 'none';
        }, 3000);

        // when the player lose
    } else if (
        (user_choice == 'rock' && computer_choice == 'paper') ||
        (user_choice == 'paper' && computer_choice == 'scissors') ||
        (user_choice == 'scissors' && computer_choice == 'rock')) {
        const result = document.querySelector('.result');
        const resultText = document.createElement("h3");
        resultText.textContent = `you lose!, ${computer_choice} beats ${user_choice}`;
        result.appendChild(resultText)
        setTimeout(() => {
            resultText.style.display = 'none';
        }, 3000);

        winner = 'computer';
        // when the player wins
    } else {
        const result = document.querySelector('.result');
        const resultText = document.createElement("h3");
        resultText.textContent = `you win!, ${user_choice} beats ${computer_choice}`;
        result.appendChild(resultText)
        setTimeout(() => {
            resultText.style.display = 'none';
        }, 3000);
        winner = 'user';

    }
    return winner


}

// calculating the score of both players until one reaches 5 points 
let userScore = 0;
let computerScore = 0;
let scoreContainer = document.querySelector(".score");
let userScoreDisplay = document.createElement('p');
let computerScoreDisplay = document.createElement('p');
function calculateWinner(button_value) {
    let winner = playRound(button_value);
    if (winner == 'user') {
        userScore += 1;
        console.log(userScore)
        // display score on the DOM
        userScoreDisplay.textContent = ` player : ${userScore}`;
        scoreContainer.appendChild(userScoreDisplay);

    } if (winner == 'computer') {
        computerScore += 1;
        console.log(computerScore)
        // display score on the DOM  
        computerScoreDisplay.textContent = ` computer : ${computerScore}`;
        scoreContainer.appendChild(computerScoreDisplay);
    }
    //when one player has 5 points announce the winner
    let finalResult = document.createElement("h2");
    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            finalResult.textContent = 'you have won';
            scoreContainer.appendChild(finalResult);
            console.log('you win...')

        } if (userScore < computerScore) {
            finalResult.textContent = 'you have lost';
            scoreContainer.appendChild(finalResult);
            console.log('you lose!..')
        } else {
            console.log('its a tie!>>')

        }

    }
}





// adding event listeners
let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    calculateWinner('rock');
})

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    calculateWinner('paper');
})

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    calculateWinner('scissors');
})








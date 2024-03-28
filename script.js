choice = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    const randomElement = choice[Math.floor(Math.random() * choice.length)];
    return randomElement
}

function playRound() {
    let winner;
    // getting the user's choice
    user_choice = prompt('please enter your choice of either rock, paper or scissors: ').toLocaleLowerCase();
    //check input
    if (!(choice.includes(user_choice))) {
        console.log('please enter a valid input')
    } else {

        // get the computer's choise
        computer_choice = getComputerChoice();
        //output the result
        //when its a tie
        if (user_choice == computer_choice) {
            console.log(`its a tie!, both players chose ${user_choice}`)
            // when the player lose
        } else if (
            (user_choice == 'rock' && computer_choice == 'paper') ||
            (user_choice == 'paper' && computer_choice == 'scissors') ||
            (user_choice == 'scissors' && computer_choice == 'rock')) {

            console.log(`you lose!, ${computer_choice} beats ${user_choice}`);
            winner = 'computer';
            // when the player wins
        } else {
            console.log(`you win!, ${user_choice} beats ${computer_choice}`);
            winner = 'user';
        }
        return winner

    }
}

function playGame() {
    let rounds = 5;
    let user_score = 0;
    let computer_score = 0;
    let winner;
    for (i = 1; i <= rounds; i++) {
        winner = playRound();
        if (winner == 'user') {
            user_score++;
        } else if (winner == 'computer') {
            computer_score++;
        }
    }
    if (user_score > computer_score) {
        console.log(`congrats!, final score -> ${user_score} : ${computer_score}`)
    } else {
        console.log(`hard luck, final score -> ${user_score} : ${computer_score}`)
    }
}
playGame();

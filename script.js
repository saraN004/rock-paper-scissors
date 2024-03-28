function getComputerChoice() {
    choice = ['rock', 'paper', 'scissors'];
    const randomElement = choice[Math.floor(Math.random() * choice.length)];
    return randomElement
}

function playRound() {
    // getting the user's choice
    user_choice = prompt('please enter your choice of either rock, paper or scissors: ').toLocaleLowerCase();

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
        // when the player wins
    } else {
        console.log(`you win!, ${user_choice} beats ${computer_choice}`);
    }
}


playRound();

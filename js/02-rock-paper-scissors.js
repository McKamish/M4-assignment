/* Rock, Paper, Scissors Game.

Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
Our code will break the game into 3 phases:

1. User makes a choice. How will we collect the user’s choice?
2. Computer makes a choice. How will we collect the computer’s choice?
3. A conditional that determines who wins.

You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

1. Begin by prompting the user for their choice.
2. Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
3. Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
4. Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
5. What if the result ends in a tie? Figure out how to handle that as well.
6. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

*/

//1. User makes choice
//converts input to lower case to allow string comparison.

let playerChoice = prompt('Choose a throw: Rock, Paper, or Scissors').toLowerCase()

//2. Computer makes choice
//Created function for this as practice. It ends up only being called once, so isn't necessary to be done this way.

function computerRoll() {
    computerChoice = Math.random()
    if (computerChoice < (1/3)) {
        return computerChoice = 'rock'
    } else if (computerChoice < (2/3)) {
        return computerChoice = 'paper'
    } else {
        return computerChoice = 'scissors'
    }
}


//3. Conditional that determines who wins

function RPSGame(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        alert(`It is a tie. Both players chose ${playerChoice}`)
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') { //user chooses rock and computer rolls scissors
        alert(`Player wins - ${playerChoice} beats ${computerChoice}.`)
    } else if (playerChoice == 'paper' && computerChoice == 'rock') { // user chooses paper and computer rolls rock
        alert(`Player wins - ${playerChoice} beats ${computerChoice}.`)
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') { //user chooses scissors and computer rolls paper
        alert(`Player wins - ${playerChoice} beats ${computerChoice}.`)
    } else {
        alert(`Computer wins - ${computerChoice} beats ${playerChoice}.`)
    }
}

//Calling the computer choice function so the roll is recorded.
computerRoll()

//Calling the function created for the comparison/game. Used a switch statement for determining if the player choice is an invalid input. 
//To note: requirements did not include restarting the program if user input was invalid, so I did not do that. It quits and must be restarted.

switch (playerChoice) {
    case 'rock':
        RPSGame(playerChoice, computerChoice)
        break
    case 'paper':
        RPSGame(playerChoice, computerChoice)
        break
    case 'scissors':
        RPSGame(playerChoice, computerChoice)
        break
    default:
        alert('Invalid input, you did not choose rock, paper, or scissors. Try again.')
}
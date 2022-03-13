const colors = require('colors');
const prompt = require('prompt-sync')({
    sigint: true
});
const Game = require('./class.js')




let myGame = new Game
let name = prompt('What is your name? '.green)
if (name) { myGame.name = name }




do {
    //prints instructions and creates secretWord in the first round
    if (myGame.attempts === 0) {
        //set a secretNumber
        let secret = myGame.getSecretNumber()
        myGame.secretNumber = secret

        //set maxAttempts
        let maxAttempts = prompt(`How many guesses do you think you will need to guess a 4 digits long number? `.cyan)
        myGame.maxAttempts = maxAttempts

        //print instructions
        console.log('Quickly, we prepared a secret number for you. \nNow its your turn. Please enter a four digit long number: ')
    }

    console.log(myGame.secretNumber)

    //resets status for the new guess
    myGame.resetStatus()

    console.log()
    //prints the number of tries here
    console.log(myGame.getStatus())

    //asks for guess
    let guess = prompt('Please enter your guess: '.green)
    myGame.guess = guess

    //checks if it is valid and asks again until it is valid
    while (!myGame.inputIsValid(guess)) {
        guess = prompt('Please enter your guess: '.green)
    }


    //checks if user lost
    if (!myGame.didWin(guess) && myGame.attempts == myGame.maxAttempts) {
        console.log()
        console.log(`OH NO! ${myGame.name}`.red)
        console.log()
        console.log('I am so sorry, but your number of attempts are over. So you lost this round. '.red)

        // asks for a new round
        let playAgain = prompt('Do you want to play again?(y)'.green)
        if (playAgain === 'y') {
            //resets all data
            myGame.resetStatus()
            myGame.updateRounds()
            myGame.resetSecretNumber()
            continue;
        } else {
            myGame.stopGame()
            console.log()
            console.log(`GOODBYE ${myGame.name}`.rainbow)
            console.log('It was a pleasure playing with you! Hope to see you back soon '.cyan)
        }


        // checks if user won
    } else if (myGame.didWin(guess)) {
        console.log()
        console.log('Congrats you won'.rainbow)
        console.log()
        console.log(myGame.getAttempts())
        console.log()
        console.log('----->', guess, '<-----')

        // asks for a new round
        let playAgain = prompt('Do you want to play again?(y)'.green)
        console.log()

        if (playAgain === 'y') {
            //resets all data
            myGame.resetStatus()
            myGame.updateRounds()
            myGame.resetSecretNumber()
            continue;
        } else {
            myGame.stopGame()
            console.log()
            console.log(`GOODBYE ${myGame.name}`.rainbow)
            console.log('It was a pleasure playing with you! Hope to see you back soon '.cyan)
            console.log()
        }


    } else {
        console.log(myGame.updateResult(guess))
    }



} while (myGame.runGame)

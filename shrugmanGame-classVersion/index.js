const colors = require('colors');
const prompt = require('prompt-sync')({
    sigint: true
});
const Game = require('./class.js')




//initialize new Game
let myGame = new Game;

//set secret word
let word = prompt('Please enter a word your gamepartner should guess: '.green)
myGame.secretWord = word

do {
    //clears console
    console.clear()

    //shows encrypted word
    console.log(myGame.getEncryptedSecretWord())

    // prints shrugman
    console.log(myGame.getShrugman())

    let guess = prompt("Enter a letter: ".rainbow);


    //as long as there is no valid Input ask for a valid input
    while (!myGame.getValidUserInput(guess)) {
        guess = prompt("Enter a letter: ".rainbow);
    }

    myGame.checkForMatches(guess)

    if (myGame.didUserWin()) {
        console.clear()
        console.log('----->', myGame.secretWord.toUpperCase(), '<-----')
        console.log('Congrats you won!!!'.rainbow)

        //checks here if user lost
    } else if (myGame.didUserLoose()) {
        console.clear()
        console.log()
        console.log('Sorry, you lost'.red)
        myGame.getShrugman()
    }
    else {
        continue;
    }

    let playAgain = prompt('do you want to play again?(y)'.green)
    console.log()

    if (playAgain === 'y') {
        console.clear()
        myGame.newRound()
        word = prompt('Please enter a word your gamepartner should guess: '.green)
        myGame.secretWord = word
    } else {
        myGame.stopGame()
        console.log(myGame.getStatus())
        console.log()
        console.log(myGame.getResult())
        console.log('_____________________________________')
        console.log()
        console.log(myGame.getGoodbye().cyan)
        console.log('_____________________________________')
        console.log()

    }

} while (myGame.runGame)




const colors = require('colors');
const prompt = require('prompt-sync')({
    sigint: true
});


let secretWord = null
const shrugman = '¯\\_(:/)_/¯'
let playGame = true
let guessedLetters = []
let amountOfWrongGuesses = 0
//arr to safe the secretWords and their status as objects
let result = []



//function to restart the Game
function restartRound() {
    guessedLetters = []
    amountOfWrongGuesses = 0
    secretWord = prompt('Please enter a word your gamepartner should guess: '.green)
}
secretWord = prompt('Please enter a word your gamepartner should guess: '.green)



do {
    console.clear()
    // print encrypted movie title
    printEncryptedSecretWord(guessedLetters, secretWord)

    // prints shrugman
    printShrugman(shrugman, amountOfWrongGuesses)
    console.log()

    //asks user for guess
    let guess = getValidUserInput(guessedLetters)


    // saves all guessed letters
    guessedLetters.push(guess.toLowerCase())


    if (!secretWord.toLowerCase().includes(guess.toLowerCase())) {
        amountOfWrongGuesses += 1;
    }


    //celebrates here, if user wins game 
    const didWin = didUserWin(secretWord, guessedLetters)
    if (didWin) {
        result.push({ name: secretWord, status: 'won' })
        console.clear()
        console.log('----->', secretWord.toUpperCase(), '<-----')
        console.log()
        console.log('Congrats you won!!!'.rainbow)
        console.log()
        // ask if user wants to play again
        askForNewGame()
        //checks here if user lost
    } else if (amountOfWrongGuesses === 10) {
        result.push({ name: secretWord, status: 'lost' })
        console.clear()
        console.log()
        console.log('Sorry, you lost'.red)
        printShrugman(shrugman, amountOfWrongGuesses)
        //ask if user wants to play again
        askForNewGame()
    }

} while (playGame)




function getValidUserInput(guessedLetters) {
    let guess;
    let isValid = false
    while (!isValid) {
        guess = prompt("Enter a letter: ".rainbow)
        if (!guessedLetters.includes(guess.toLowerCase()) && guess.length === 1) {
            isValid = true
        }
    }
    return guess
}

// displays wrong number of guesses as shrugman
function printShrugman(shrugman, wrongGuess) {
    console.log()
    console.log(shrugman.substring(0, wrongGuess).blue)
}


function printEncryptedSecretWord(guessedLetters, secretWord) {
    let output = secretWord.split('').map((letter) => {
        if (letter === ' ' || guessedLetters.includes(letter.toLowerCase())) {
            return letter
        }
        return '_'
    }).join('')
    console.log()
    console.log(output)
}


function didUserWin(secretWord, guessedLetters) {
    return secretWord.toLowerCase().split('').every(letter => guessedLetters.includes(letter))
}



function askForNewGame() {
    console.log()
    let playAgain = prompt('do you want to play again?(y/n)'.green)
    console.log()
    if (playAgain === 'n') {
        playGame = false
        console.log(`Congrats you played ${result.length} ${result.length === 1 ? 'Round' : 'Rounds'}. \n${result.filter(el => el.status === 'won').length} times you won and ${result.filter(el => el.status === 'lost').length} times you lost: `)
        console.log()
        printResult(result)
        console.log()
        console.log('Hope to see you back here, soon! 👋 byebye 👋'.cyan)
        console.log()
    } else if (playAgain === 'y') {
        console.clear()
        restartRound()
    } else {
        console.log('this was not a valid answer, try again:')
        askForNewGame()
    }
}

function printResult(result) {
    result.forEach((el, index) => console.log(`${index + 1}. ${el.name} - ${el.status}`))
}
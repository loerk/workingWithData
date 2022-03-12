

class Game {
    constructor() {
        this.shrugman = '¯\\_(:/)_/¯'
        this.guessedLetters = []
        this.amountOfWrongGuesses = 0
        this.runGame = true
        this.result = []
    }

    newRound() {
        this.guessedLetters = []
        this.amountOfWrongGuesses = 0
    }


    getRandomWord() {
        let books = ['Harry Potter', 'Assembly', 'Second Place', 'A Shock']
        let movies = ['Memento', 'Titanic', 'Snowpiercer', 'Inception', 'Pi']
        if (this.category === 'b') {
            return books[Math.floor(Math.random() * books.length)]
        } else {
            return movies[Math.floor(Math.random() * movies.length)]
        }
    }

    getEncryptedSecretWord() {
        return this.secretWord.split('').map((letter) => {
            if (letter === ' ' || this.guessedLetters.includes(letter.toLowerCase())) {
                return letter
            }
            return '_'
        }).join('')
    }

    getValidUserInput(guess) {
        if (!this.guessedLetters.includes(guess.toLowerCase()) && guess.length === 1) {
            return true
        }
        return false
    }

    checkForMatches(guess) {
        this.guessedLetters.push(guess.toLowerCase())
        if (!this.secretWord.toLowerCase().includes(guess.toLowerCase())) {
            this.amountOfWrongGuesses += 1;
        }
    }

    didUserWin() {
        if (this.secretWord.toLowerCase().split('').every(letter => this.guessedLetters.includes(letter))) {
            this.result.push({ name: this.secretWord, status: 'won' })
            return true
        }
        return false
    }

    didUserLoose() {
        if (this.amountOfWrongGuesses === 10) {
            this.result.push({ name: this.secretWord, status: 'lost' })
            return true
        }
        return false
    }

    getShrugman() {
        return this.shrugman.substring(0, this.amountOfWrongGuesses).blue
    }

    stopGame() {
        this.runGame = false
    }

    getStatus() {
        return `Congrats you played ${this.result.length} ${this.result.length === 1 ? 'Round' : 'Rounds'}. \n${this.result.filter((el) => el.status === 'won').length} times you won and ${this.result.filter((el) => el.status === 'lost').length} times you lost: `
    }

    getResult() {
        return this.result.map((el, index) => `${index + 1}. ${el.name} - ${el.status}`).join('\n')
    }

    getGoodbye() {
        return 'Hope to see you back here, soon! \n          👋 byebye 👋'
    }
}




module.exports = Game;

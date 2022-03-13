

class Game {
    constructor() {
        this.runGame = true
        this.attempts = 0
        this.rounds = 1
        this.bulls = 0
        this.cows = 0
        this.secretNumber = []
        this.maxAttempts = 10;
        this.name = 'Guest'
    }


    getSecretNumber() {
        while (this.secretNumber.length < 4) {
            let number = Math.floor(Math.random() * 9) + 1
            if (!this.secretNumber.includes(number)) {
                this.secretNumber.push(number);
            }
        }
        return this.secretNumber
    }

    updateRounds() {
        this.rounds++
        this.attempts = 0
    }

    resetSecretNumber() {
        this.secretNumber = []
    }

    resetStatus() {
        this.attempts++
        this.bulls = 0
        this.cows = 0
    }

    inputIsValid(guess) {
        if (guess.length === 4 && !isNaN(parseInt(guess))) {
            return true
        }
        return false
    }

    getStatus() {
        return `This is try number ${this.attempts}. Good Luck!\n `
    }

    didWin(guess) {
        return this.secretNumber.join('') === guess
    }

    getAttempts() {
        return `You needed only ${this.attempts} ${this.attempts === 1 ? 'attempt. Very smart!' : 'attempts'}!`
    }

    updateResult(guess) {
        this.secretNumber.map((el, index) => {
            if (el == guess[index]) {
                this.bulls++
            } else if (guess.includes(el)) {
                this.cows++
            }
        })
        return `${this.bulls} Bulls and ${this.cows} Cows`
    }

    stopGame() {
        this.runGame = false
    }

}





module.exports = Game
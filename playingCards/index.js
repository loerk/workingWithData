class Deck {
    constructor() {
        this.deck = [];
        this.drawnCards = [];
    }

    initialize(){
        const suits = ['hearts', 'diamonds', 'spades', 'clubs']
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        for (let suit of suits){
            for(let value of values){
                // let card = {
                //     value:value,
                //     suit:suit,
                // }
                // this.deck.push(card)
                //or alternative identical option to create the card object
                this.deck.push({
                    value:value,
                    suit:suit,
                })
            }
        }
    }

    printDeck(){
            console.log(this.deck)
    }
        
    shuffle(){
        this.deck.forEach((card, i) => {
            let temp = this.deck[i];
            let rand = Math.floor(Math.random() * this.deck.length);
            this.deck[i] = this.deck[rand]
            this.deck[rand] = temp
        })
        return this.deck;
    }

    draw(){
        let card = this.deck.pop()
        this.drawnCards.push(card)
        return card
    }

//    get cards from the top of the shuffled deck and removes it from the deck
    drawMultipleCards(num) {
        let hand = [];
        for (let i = 0; i < num; i++) {
            let card = this.draw()
            hand.push(card)
        }
        return hand
    }

    printDrawnCards(){
    console.log(this.drawnCards)
    }

//play one random card from the hand and remove it from the hand
    playCard() {
        let playedCards = [];
        playedCards.push(this.hand[Math.ceil(Math.random() * this.hand.length - 1)])
        let index = this.hand.indexOf(playedCards[0])
        this.hand.splice(index, 1)
        return playedCards
    }
}

let game3 = new Deck;
console.log(game3.initialize())
console.log(game3.draw(6))
console.log(game3.drawnCards)
console.log(game3.deck)
console.log(game3.shuffle())



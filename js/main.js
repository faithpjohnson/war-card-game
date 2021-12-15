/**** Constants ****/
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const suits = ['s', 'c', 'd', 'h'];


/**** State Variables ****/
let player1Cards;
let player2Cards;
let war;
let shuffledDeck = [];
let winner;

/**** Cached Elements ****/
// card count element
const countEl = {
    player1: document.querySelector("#player-1-card-count"),
    player2: document.querySelector("#player-2-card-count")
};
const winnerMsgEl = document.querySelector(".winner-msg");
const gameBoardEl = document.querySelector(".game-board");

/**** Event Listeners ****/
// elements to listen for- buttons have been tested
// draw cards button
// restart button
document.querySelector(".drw-btn").addEventListener("click", playRound);
document.querySelector(".restart-btn").addEventListener("click", restartGame);

/**** Functions ****/

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    getClass(){
        let classString = `${this.suit}${this.rank}`;
        return classString;
    }
}

class Deck {
// create deck
    constructor() {
        let tmpCards = [];
        ranks.forEach(function(rank) {
            suits.forEach(function(suit) {
                const tmpCard = new Card(rank, suit);
                tmpCards.push(tmpCard);
            })
        })

        this.cards = tmpCards;
        console.log(tmpCards);
    }
    getCards(){
        return this.cards;
    }
    // methods
    shuffleDeck() {
        let shuffledDeck = [];
        for (let i = 0; i < 52; i++) {
            let rndIdx =  Math.floor(Math.random() * this.cards.length);
            shuffledDeck.push(this.cards.splice(rndIdx, 1)[0]);
        }
        this.cards = shuffledDeck;
        console.log(shuffledDeck);
    }
    splitPlayerDecks(){
        
        let player1Cards = this.cards.slice(0, 26);
        console.log("test", player1Cards)

        let player2Cards = this.cards.slice(26, 52);
        console.log("test2", player2Cards)
        return [player1Cards, player2Cards];
    }
    // add method for card count
}


init();
// initialize start variables 
// call shuffle & create deck functions upon loading
function init() {

    // create deck
    let tempDeck = new Deck();

    // shuffle deck
    tempDeck.shuffleDeck();
  
   //split deck between players
    let playersCards = tempDeck.splitPlayerDecks();
    player1Cards = playersCards[0];
    player2Cards = playersCards[1];
 
    winner = null;
    render();
 
}

function render() {
    countEl.player1.innerText = player1Cards.length;
    countEl.player2.innerText = player2Cards.length;

    
}


function playRound() {
    console.log("PR functino is being invoked!");
    


}


function restartGame() {
    console.log("RG function is being invoked!");
}







/**** Constants ****/
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const suits = ['s', 'c', 'd', 'h'];


/**** State Variables ****/
let player1Deck;
let player2Deck;
let cardCount;
let war;
let shuffledDeck = [];
let winner;

/**** Cached Elements ****/
// card count element
const countEl = {
    player1: document.querySelector("#player-1-card-count"),
    player2: document.querySelector("#player-2-card-count")
};
const wnrMsgEl = document.querySelector(".winner-msg");

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
    // getter
    get getCards(){
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
        let player1Deck = this.cards.slice(0, 26);
        console.log("test", player1Deck)

        let player2Deck = this.cards.slice(26, 52);
        console.log("test2", player2Deck)
        return [player1Deck, player2Deck];
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
    let playerDecks = tempDeck.splitPlayerDecks();
    console.log("Player 1: ", playerDecks[0]);
    console.log("Player 2: ", playerDecks[1]);

    cardCount = {
        player1:  26,
        player2: 26
    };
    winner = null;
    render();
 
}

function render() {
    countEl.player1.innerText = cardCount.player1;
    countEl.player2.innerText = cardCount.player2;
}





function playRound() {
    console.log("PR functino is being invoked!");
}


function restartGame() {
    console.log("RG function is being invoked!");
}







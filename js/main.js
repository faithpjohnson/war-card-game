/**** Constants ****/
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['♣', '♦', '♥', '♠'];


/**** State Variables ****/
let player1Deck;
let player2Deck;
let player1Count;
let player2Count;
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

function createDeck() {
    const deck = []
    ranks.forEach(function(rank) {
        suits.forEach(function(suit) {
            const tmpCard = new Card(rank, suit);
            deck.push(tmpCard)
        })
    })
    return deck;
}

function shuffleDeck(deck) {
    let shuffledDeck = [];
    for (let i = 0; i < 52; i++) {
        let rndIdx =  Math.floor(Math.random() * deck.length);
        shuffledDeck.push(deck.splice(rndIdx, 1)[0]);
    }
    return shuffledDeck;
}

// create player decks
function createPlayerDecks() {
    player1Deck = shuffledDeck.slice(0, 26);
    player2Deck = shuffledDeck.slice(26, 52);
    return player1Deck, player2Deck;
}

console.log(createPlayerDecks());



init();
// initialize start variables 
// call shuffle & create deck functions upon loading
function init() {
    let tempDeck = createDeck();
    let tempShuffledDeck = shuffleDeck(tempDeck);
    let playerDecks = createPlayerDecks(tempShuffledDeck);
    console.log(tempShuffledDeck);
    console.log(playerDecks);
}

function render() {

}

function playRound() {
    console.log("PR functino is being invoked!");
}


function restartGame() {
    console.log("RG function is being invoked!");
}







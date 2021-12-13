/**** Constants ****/
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['♣', '♦', '♥', '♠'];


/**** State Variables ****/
let player1Deck ;
let player2Deck ;
let player1Count;
let player2Count ;
let war;
let shuffledDeck;
let winner;

/**** Cached Elements ****/
// card count element
const countEl = {
    player1: document.querySelector("#player-1-card-count"),
    player2: document.querySelector("#player-2-card-count")
};
const wnrMsgEl = document.querySelector(".winner-msg");
const shuffledContainer = document.querySelector(".shuffled-card-container");

/**** Event Listeners ****/
// elements to listen for- buttons have been tested
// draw cards button
// restart button
document.querySelector(".drw-btn").addEventListener("click", playRound);
document.querySelector(".restart-btn").addEventListener("click", restartGame);


/**** Functions ****/
init();
// initialize start variables 
function init(){

}

function render(){

}

function playRound(){
    
}

function restartGame(){
    console.log("RG function is being invoked!");
}

function getNewShuffledDeck() {
    const tempDeck = [...masterDeck];
    const newShuffledDeck = [];
    while (tempDeck.length) {
        const randomIdx = Math.floor(Math.random() * tempDeck.length);
        newShuffledDeck.push(tempDeck.splice(randomIdx, 1)[0]);
    }
    return newShuffledDeck;
}

function renderNewShuffledDeck(){
    shuffledDeck = getNewShuffledDeck();
    renderDeck(shuffledDeck, shuffledContainer);
}


function renderDeck(deck, container){
    container.innerHTML = '';
const cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card${card.face}"</div>`;
}, '');
    container.innerHTML = cardsHtml;
}

function buildMasterDeck(){
    const deck = [];
    suits.forEach(function(suit){
        ranks.forEach(function(rank){
            deck.push({
                face: `${suit}${rank}`
            });
        });
    });
    return deck;
}

renderNewShuffledDeck();


















// create a card class 
// that returns a new array-that will be the deck
/*class Card {
    constructor(rank, suit){
    this.rank = rank;
    this.suit = suit;
    }
}
let deck = rank.map(function(el1){
    return suit.map(function(el2){
        return new Card(el1, el2)
    })
});
// reduce deck to one array
let reduceDeck = deck.reduce(function(acc, curr){
    return acc.concat(curr);
})

console.log(reduceDeck);*/
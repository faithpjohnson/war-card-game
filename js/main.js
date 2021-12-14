/**** Constants ****/
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['♣', '♦', '♥', '♠'];


/**** State Variables ****/
let player1Deck ;
let player2Deck ;
let player1Count;
let player2Count ;
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

init();
// initialize start variables 
// call shuffle & create deck functions upon loading
function init(){
    shuffleDeck();
    createDecks();
}

function render(){

}

function playRound(){
    console.log("PR functino is being invoked!");
}

function restartGame(){
    console.log("RG function is being invoked!");
}

// shuffle deck function 
// create a class that will contain 
// the ranks and suits in array
function shuffleDeck(){
class Card{
    constructor(ranks, suits){
        this.ranks = ranks;
        this.suits = suits;
    }
}

// create deck 
    const deck = ranks.map(function(el1){
        return suits.map(function(el2){
            return new Card(el1, el2);
        })
    })
  
// use reduce to put the ranks and suits into one array
let reduceDeck = deck.reduce(function(acc, curr){
    return acc.concat(curr);
})
// loop through the reduced array
// use math floor and random to select element
// push to shuffledDeck array
for (let i = 0; i < 52; i++){
    let currentCard = reduceDeck.splice(Math.floor(Math.random() * reduceDeck.length), 1);
    shuffledDeck.push(currentCard);
    }
    return shuffledDeck;
}

// create player decks
function createDecks(){
    player1Deck = shuffledDeck.slice(0, 26);
    player2Deck = shuffledDeck.slice(26, 52);
}











// const masterDeck = buildMasterDeck();
// //renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

// function getNewShuffledDeck() {
//     const tempDeck = [...masterDeck];
//     const newShuffledDeck = [];
//     while (tempDeck.length) {
//         const randomIdx = Math.floor(Math.random() * tempDeck.length);
//         newShuffledDeck.push(tempDeck.splice(randomIdx, 1)[0]);
//     }
//     return newShuffledDeck;
// }

// function renderNewShuffledDeck(){
//     shuffledDeck = getNewShuffledDeck();
//     renderDeck(shuffledDeck, shuffledContainer);
// }

// function renderDeckInContainer(deck, container){
//     container.innerHTML = '';
//     let cardsHtml = '';
//     const cardsHtml = deck.reduce(function(html, card) {
//     return html + `<div class="card${card.face}"</div>`;
// }, '');
//     container.innerHTML = cardsHtml;
// }

// function buildMasterDeck(){
//     const deck = [];
//     suits.forEach(function(suit){
//         ranks.forEach(function(rank){
//             deck.push({
//                 face: `${suit}${rank}`
//             });
//         });
//     });
//     return deck;
// }

// renderNewShuffledDeck();












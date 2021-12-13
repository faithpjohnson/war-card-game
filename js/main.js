/**** Constants ****/
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suit = ['♣', '♦', '♥', '♠'];



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
    console.log("PR function is being invoked!")
}

function restartGame(){
    console.log("RG function is being invoked!");
}

// create a card class 
// that returns a new array-that will be the deck
class Card {
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
console.log(deck);
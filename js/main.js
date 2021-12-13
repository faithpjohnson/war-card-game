/**** Constants ****/
const cardRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const cardSuit = ['♣', '♦', '♥', '♠'];



/**** State Variables ****/
let player1Deck ;
let player2Deck ;
let player1Count;
let player2Count ;
let war;
let shuffle;
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


// initialize start variables 
function init(){

}


function render(){

}



function playRound(){
    console.log("PR function is being invoked!")
}


function restartGame(){
    console.log("RG function is being invoked!")
}
/*----- constants -----*/
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const suits = ['s', 'c', 'd', 'h'];

/*----- app's state (variables) -----*/
let player1Cards;
let player2Cards;
let war = [];
let flippedCard1;
let flippedCard2;
let gameMessage= "";

/*----- cached element references -----*/
// card count element
let countEl = {
    player1: document.querySelector("#player-1-card-count"),
    player2: document.querySelector("#player-2-card-count")
};

const activeCardEl = {
    player1Active: document.querySelector("#player1-active"),
    player2Active: document.querySelector("#player2-active")
};

let winnerMsgEl = document.querySelector(".winner-msg");

/*----- event listeners -----*/
// elements to listen for- buttons have been tested
// draw cards button
// restart button
document.querySelector(".drw-btn").addEventListener("click", drawCards);
document.querySelector(".restart-btn").addEventListener("click", restartGame);

/*----- functions -----*/
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    getClass(){
        let classString = `${this.suit}${this.rank}`;
        return classString;
    }
    // need to fix this- have to assign values to J,K,Q,A
    // use index of ranks array to assign values?
    getCardValue(){
        // for(let i = 0; i < ranks.length; i++){
            //  console.log("ranksCollection",ranks[i]);
            //  console.log("this",this.rank);
        let cardValue = ranks.indexOf(this.rank);
        console.log(`The player has a ${this.rank} and it has value ${cardValue}`);
        return cardValue;
    
    }
}

class Deck {
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
        //console.log("test", player1Cards)

        let player2Cards = this.cards.slice(26, 52);
        //console.log("test2", player2Cards)
        return [player1Cards, player2Cards];
    }
}


init();

function init() {

    // create deck
    let tempDeck = new Deck();

    // shuffle deck
    tempDeck.shuffleDeck();
  
   // split deck between players
    let playersCards = tempDeck.splitPlayerDecks();
    player1Cards = playersCards[0];
    player2Cards = playersCards[1];

    winner = null;

    drawCards();
}

// render card count
// render cards
// render winner message
function render() {
    countEl.player1.innerText = player1Cards.length;
    countEl.player2.innerText = player2Cards.length;
    
    activeCardEl.player1Active.className = "card xlarge";
    let flippedCard1Class = flippedCard1.getClass();
    activeCardEl.player1Active.classList.add(flippedCard1Class);

    activeCardEl.player2Active.className = "card xlarge";
    let flippedCard2Class = flippedCard2.getClass();
    activeCardEl.player2Active.classList.add(flippedCard2Class);

    // render winner message when a player reaches 0 cards
    winnerMsgEl.innerText = gameMessage;
}


function drawCards(){
  
    flippedCard1 = player1Cards.shift();
    flippedCard2 = player2Cards.shift();
   

    let player1CardValue = flippedCard1.getCardValue();
    let player2CardValue = flippedCard2.getCardValue();
    console.log(player1CardValue, player2CardValue);
    
    if(player1CardValue > player2CardValue){
        console.log("player1 winssss");
        //if player1 wins
        //add player2 card to player1 deck .push
        player1Cards.push(flippedCard2);
        player1Cards.push(flippedCard1);
    } else if(player2CardValue > player1CardValue){
        console.log("player 2 winssss");
        player2Cards.push(flippedCard1);
        player2Cards.push(flippedCard2);
    } else {
        console.log("WAR");
        activateWar();
    }

    if(player1Cards.length === 0){
        gameMessage = "Player 2 WINS!";
    } else if (player2Cards.length === 0){
        gameMessage= "Player 1 WINS!";
    }

    render();
}

// 
function getRoundWinner(){

}


function renderWnrMsg(){

}

function activateWar(){
    console.log("it's war!!");
}

function restartGame() {
    console.log("RG function is being invoked!");
    init();
}







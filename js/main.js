/*----- constants -----*/
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const suits = ['s', 'c', 'd', 'h'];

/*----- app's state (variables) -----*/
let player1Cards;
let player2Cards;
let warStack = [];
let flippedCard1;
let flippedCard2;
let gameMessage= "";
let player1CardValue;
let player2CardValue;

/*----- cached element references -----*/

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

    getCardValue(){
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
        const cardLength = this.cards.length;
        for (let i = 0; i < cardLength; i++) {
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

function render() {
    countEl.player1.innerText = player1Cards.length;
    countEl.player2.innerText = player2Cards.length;
    
    activeCardEl.player1Active.className = "card xlarge";
    let flippedCard1Class = flippedCard1.getClass();
    activeCardEl.player1Active.classList.add(flippedCard1Class);

    activeCardEl.player2Active.className = "card xlarge";
    let flippedCard2Class = flippedCard2.getClass();
    activeCardEl.player2Active.classList.add(flippedCard2Class);

    winnerMsgEl.innerText = gameMessage;

    console.log("=====================START==========================");
    console.log("player1Cards", player1Cards);
    console.log("player2Cards", player2Cards);
    console.log("warStack", warStack);
    console.log("flippedCard1", flippedCard1);
    console.log("flippedCard2", flippedCard2);
    console.log("gameMessage", gameMessage);
    console.log("player1CardValue", player1CardValue);
    console.log("player2CardValue", player2CardValue);
    console.log(`cards add up to 52: ${player1Cards.length + player2Cards.length === 52}`);
    console.log(`cards add up to 52: ${player1Cards.length + player2Cards.length}`);
    console.log("======================END=========================");
}


function drawCards(){
  
    flippedCard1 = player1Cards.shift();
    flippedCard2 = player2Cards.shift();
   
    player1CardValue = flippedCard1.getCardValue();
    player2CardValue = flippedCard2.getCardValue();
    console.log(player1CardValue, player2CardValue);
    
 
    getRoundWinner();
    render();
    
}

function getRoundWinner(){
    if(player1CardValue > player2CardValue){
        console.log("Player 1 Wins!");
        player1Cards.push(flippedCard2);
        player1Cards.push(flippedCard1);
        player1Cards.push(...warStack);
        gameMessage = "Player 1 Wins this round";
    } else if(player2CardValue > player1CardValue){
        console.log("Player 2 Wins!");
        player2Cards.push(flippedCard1);
        player2Cards.push(flippedCard2);
        player2Cards.push(...warStack);
        gameMessage = "Player 2 Wins this round";
    } else {
        console.log("WAR");
        gameMessage = "It's WAR!";
        // put cards in war stack
        warStack.push(flippedCard1);
        warStack.push(flippedCard2);

        // draw additional cards from each card stack
        drawCards();
    }

    if(player1Cards.length === 0){
        gameMessage = "Player 2 WINS!";
    } else if (player2Cards.length === 0){
        gameMessage= "Player 1 WINS!";
    }
}

function restartGame() {
    console.log("RG function is being invoked!");
    init();
}







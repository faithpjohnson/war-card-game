/*----- constants -----*/
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const suits = ['s', 'c', 'd', 'h'];

/*----- app's state (variables) -----*/
let player1Cards;
let player2Cards;
let warStack = [];
let flippedCard1;
let flippedCard2;
let gameMessage = "";
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
document.querySelector(".draw-btn").addEventListener("click", drawCards);
document.querySelector(".restart-btn").addEventListener("click", restartGame);

/*----- classes -----*/
// card class to make it easier to interact with card
class Card {
	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}
	// helpers
	getClass() {
		return `${this.suit}${this.rank}`;
	}
	getCardValue() {
		return ranks.indexOf(this.rank);
	}
}
// deck class to make and interact with a collection of cards
class Deck {
	// loop through cards and ranks and create a new array of cards
	constructor() {
		let newCards = [];
		ranks.forEach(function(rank) {
			suits.forEach(function(suit) {
				newCards.push(new Card(rank, suit));
			})
		})
		// saving new cards to the cards property on the deck object 
		this.cards = newCards;
	}
	// returns cards property on the deck object
	getCards() {
		return this.cards;
	}
	shuffleDeck() {
		let shuffledDeck = [];
		const cardLength = this.cards.length;
		for (let i = 0; i < cardLength; i++) {
			let rndIdx = Math.floor(Math.random() * this.cards.length);
			shuffledDeck.push(this.cards.splice(rndIdx, 1)[0]);
		}
		// save shuffled cards to cards property on the deck object
		this.cards = shuffledDeck;
	}
	splitPlayerDecks() {
		let player1Cards = this.cards.slice(0, 26);
		let player2Cards = this.cards.slice(26, 52);
		return [player1Cards, player2Cards];
	}
}

/*----- functions -----*/
init();

function init() {
	// create new instance of the deck obj
	let tempDeck = new Deck();
	// shuffle deck
	tempDeck.shuffleDeck();
	// split deck between players
	let playersCards = tempDeck.splitPlayerDecks();
	player1Cards = playersCards[0];
	player2Cards = playersCards[1];
	// activeCardEl.player1Active.className = "card outline xlarge";
	// let flippedCard1Class = flippedCard1.getClass();
	// activeCardEl.player1Active.classList.add(flippedCard1Class);
	// activeCardEl.player2Active.className = "card outline xlarge";
	// let flippedCard2Class = flippedCard2.getClass();
	// activeCardEl.player2Active.classList.add(flippedCard2Class);
	// console.log(flippedCard2Class);
}

function render() {
	countEl.player1.innerHTML = `Card Count: ${player1Cards.length}`;
	countEl.player2.innerHTML = `Card Count: ${player2Cards.length}`;
	// activeCardEl.className = "card shadow xlarge";
	activeCardEl.player1Active.className = "card shadow xlarge";
	let flippedCard1Class = flippedCard1.getClass();
	activeCardEl.player1Active.classList.add(flippedCard1Class);
	activeCardEl.player2Active.className = "card shadow xlarge";
	let flippedCard2Class = flippedCard2.getClass();
	activeCardEl.player2Active.classList.add(flippedCard2Class);
	winnerMsgEl.innerText = gameMessage;
	
	console.log("warStack", warStack);
	console.log(`cards add up to 52: ${player1Cards.length + player2Cards.length === 52}`);
	console.log(`cards add up to 52: ${player1Cards.length + player2Cards.length}`);
	
}

function drawCards() {
	flippedCard1 = player1Cards.shift();
	flippedCard2 = player2Cards.shift();
	player1CardValue = flippedCard1.getCardValue();
	player2CardValue = flippedCard2.getCardValue();
	getRoundWinner();
	render();
}

function getRoundWinner() {
	if (player1CardValue > player2CardValue) {
		player1Cards.push(flippedCard2, flippedCard1, ...warStack);
		warStack = [];
		gameMessage = "Player 1 Wins this round!";
	} else if (player2CardValue > player1CardValue) {
		player2Cards.push(flippedCard1, flippedCard2, ...warStack);
		warStack = [];
		gameMessage = "Player 2 Wins this round!";
	} else {
		gameMessage = "It's WAR!";
		warStack.push(flippedCard1, flippedCard2);
		drawCards();
	}
	if (player1Cards.length === 0) {
		gameMessage = "Player 2 WINS!";
	} else if (player2Cards.length === 0) {
		gameMessage = "Player 1 WINS!";
	}
}

function restartGame() {
	init();
	render();
}
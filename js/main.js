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
let drawButton;

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
const drawCardsbutton = document.querySelector(".draw-btn");

/*----- event listeners -----*/
document.querySelector(".draw-btn").addEventListener("click", drawCards);
document.querySelector(".restart-btn").addEventListener("click", restartGame);

/*----- classes -----*/
class Card {
	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}
	getClass() {
		if (this.rank === "empty") {
			return "outline";
		}
		return `${this.suit}${this.rank}`;
	}
	getCardValue() {
		return ranks.indexOf(this.rank);
	}
}
class Deck {
	constructor() {
		let newCards = [];
		ranks.forEach(function(rank) {
			suits.forEach(function(suit) {
				newCards.push(new Card(rank, suit));
			})
		})
		this.cards = newCards;
	}
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
render();

function init() {
	let tempDeck = new Deck();
	tempDeck.shuffleDeck();
	let playersCards = tempDeck.splitPlayerDecks();
	player1Cards = playersCards[0];
	player2Cards = playersCards[1];
	gameMessage = "";
	drawButton = "start game";
	flippedCard1 = new Card("empty", "empty");
	flippedCard2 = new Card("empty", "empty");
}

function render() {
	countEl.player1.innerHTML = `Card Count: ${player1Cards.length}`;
	countEl.player2.innerHTML = `Card Count: ${player2Cards.length}`;
	activeCardEl.player1Active.className = "card shadow xlarge";
	activeCardEl.player1Active.classList.add(flippedCard1.getClass());
	activeCardEl.player2Active.className = "card shadow xlarge";
	activeCardEl.player2Active.classList.add(flippedCard2.getClass());
	winnerMsgEl.innerText = gameMessage;
	drawCardsbutton.innerText = drawButton;
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
		drawButton = "draw cards";
	} else if (player2CardValue > player1CardValue) {
		player2Cards.push(flippedCard1, flippedCard2, ...warStack);
		warStack = [];
		gameMessage = "Player 2 Wins this round!";
		drawButton = "draw cards";
	} else {
		gameMessage = "It's WAR!";
		drawButton = "draw again for war";
		warStack.push(flippedCard1, flippedCard2);
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
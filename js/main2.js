// function getNewShuffledDeck() {
//     // master deck copy
//     const tempDeck = [...masterDeck];
//     const newShuffledDeck = [];
//     while (tempDeck.length) {
//       // Get a random index for a card in the tempDeck
//       const rndIdx = Math.floor(Math.random() * tempDeck.length);
//       newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
//     }
//     return newShuffledDeck;
//   }

// function renderNewShuffledDeck() {
//     // Create a copy of the masterDeck 
//     shuffledDeck = getNewShuffledDeck();
//     renderDeckInContainer(shuffledDeck, shuffledContainer);
//   }

// function renderDeckInContainer(deck, container) {
//     container.innerHTML = '';
//     // build the cards as a string of HTML
//     let cardsHtml = '';
//     deck.forEach(function(card) {
//       cardsHtml += `<div class="card ${card.face}"></div>`;
//     });
//     container.innerHTML = cardsHtml;
//   }

//   function buildMasterDeck() {
//     const deck = [];
//     // generate card objects
//     suits.forEach(function(suit) {
//       ranks.forEach(function(rank) {
//         deck.push({
//           face: `${suit}${rank}`
//         });
//       });
//     });
//     return deck;
//   }

// renderNewShuffledDeck();

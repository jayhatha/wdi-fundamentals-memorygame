// setting up the cards
var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  }
];
// creating the board
function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }

}


// storing the cards the player picks
var cardsInPlay = [];
var suitsInPlay = [];
//checking for a match
function checkForMatch() {

  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('Winner, winner, chicken dinner!');
    } else {
      alert('Sorry. Try again!');
    }
  }
}
// flipping over the selected cards
function flipCard() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  suitsInPlay.push(cards[cardId].suit);
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  checkForMatch();
}


createBoard();

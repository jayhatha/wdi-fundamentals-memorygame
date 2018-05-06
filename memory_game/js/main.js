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
    cardElement.setAttribute('flipped', false);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }

}


// storing the cards the player picks
var cardsInPlay = [];
// setting up the scoreboard
var score = 0;
var attempts = 0;

//checking for a match
function checkForMatch() {

  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('Winner, winner, chicken dinner!');
      attempts++;
      score ++;
      document.getElementById("scoreboard").innerHTML = ('Score: ' + score + ' ' + ((score/attempts)*100).toFixed(1) + '%');
    } else {
      alert('Sorry. Try again!');
      attempts ++;
      document.getElementById("scoreboard").innerHTML = ('Score: ' + score + ' ' + ((score/attempts)*100).toFixed(1) + '%');
    }
  }
}
// flipping over the selected cards
function flipCard() {
  var cardId = this.getAttribute('data-id');
  var isFlipped = this.getAttribute('src');
  console.log(isFlipped);
  if (isFlipped === 'images/back.png') {
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    checkForMatch();
  } else {
    console.log('card was already flipped');
  }
}
// resetting the board
function resetCards() {
  document.getElementById('game-board').innerHTML = "";
  cardsInPlay = [];
  cards.sort(function() { return 0.5 - Math.random() });
  createBoard();
}
function resetScore() {
  score = 0;
  attempts = 0;
  document.getElementById("scoreboard").innerHTML = ('Score: ');
}
cards.sort(function() { return 0.5 - Math.random() });
createBoard();

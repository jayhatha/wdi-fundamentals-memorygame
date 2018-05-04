var cards = [
{
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
var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('Winner, winner, chicken dinner!');
    } else {
      alert('Sorry. Try again!');
    }
  }
}

function flipCard(cardId) {

  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  console.log(cards[cardId].cardImage);

}
flipCard(0);
flipCard(2);

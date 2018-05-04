var cards = ['queen', 'queen', 'king', 'king'];
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

  cardsInPlay.push(cards[cardId]);
  checkForMatch();
  console.log("User flipped " + cards[cardId]);

}
flipCard(0);
flipCard(2);

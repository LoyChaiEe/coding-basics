var deck = []

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.

var main = function (input) {
  makeDeck()
  //console.log(deck)
  //console.log(deck.length)
  /*for(let i = 0; i < deck.length; i++)
  {
    console.log(deck[i])
  }*/
  var shuffledDeck = shuffleCards(deck)
  //console.log(shuffledDeck)
  // Draw 2 cards from the top of the deck
  var computerCard1 = shuffledDeck.pop();
  var playerCard1 = shuffledDeck.pop();
  var computerCard2 = shuffledDeck.pop();
  var playerCard2 = shuffledDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var myOutputValue =
    'Computer had ' + computerCard1.name + ' of ' + computerCard1.suit + 
    ' and ' + computerCard2.name + ' of ' + computerCard2.suit +
    '. <br>Player had ' + playerCard1.name + ' of ' + playerCard1.suit +
    ' and ' + playerCard2.name + ' of ' + playerCard2.suit + '. ';

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  var playerWinnerCard = cardComparator(playerCard1,playerCard2)
  var computerWinnerCard = cardComparator(computerCard1,computerCard2)
  var winnerCard = cardComparator(playerWinnerCard, computerWinnerCard)

  if(playerWinnerCard == computerWinnerCard){
    myOutputValue += 'It is a tie!'
  }
  else if(playerWinnerCard == winnerCard)
  {
    myOutputValue += 'Player wins!'
  }
  else if(computerWinnerCard == winnerCard){
    myOutputValue += 'Computer wins!'
  }
  return myOutputValue;
};
var makeDeck = function(){
  var suit = ["❤️", "♦", "♣", "♠️"]
  var name = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", ]
  function Card(cardName, logo, number){
    this.name = cardName;
    this.suit = logo;
    this.rank = number
  }
  for(let i = 0; i < suit.length; i++){
    for(let j = 0; j < name.length; j++)
    {
      let currentCard = new Card(name[j], suit[i], j + 1)
      deck.push(currentCard)
    }
  }
}
var shuffleCards = function(shufflingDeck){
  for (let i = shufflingDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = shufflingDeck[i];
    shufflingDeck[i] = shufflingDeck[j];
    shufflingDeck[j] = temp;
  }
  return shufflingDeck
}

//Compare card and return winning card
var cardComparator = function(card1, card2){
  if(card1.rank === card2.rank){
    return card1
  }
  else if (card1.rank > card2.rank) {
    // Add conditional-dependent text to the output string
    return card1
    // Else if computer card rank is less than player card rank, player wins
  } 
  else if(card2.rank > card1.rank){
    return card2
  }
}
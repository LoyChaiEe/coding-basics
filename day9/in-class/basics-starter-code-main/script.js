var deck = []
var gamemode = "set-up"

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.

var main = function (input) {
  var output = ""
  switch(gamemode){
    case "set-up":
      setup()
      output = `Welcome to Moar Cards!<br<br>Choose which mode you want to play:<br><br>1. High card<br>2. Low Card<br><br>Type in the number to choose`
      gamemode = "Select Mode"
      break;
    case "Select Mode":
      output = selectMode(input)
      break;
    case "High Card":
      output = game();
      break;
    case "Low Card":
      output = game()

  }
};
var selectMode = function(userChoice){

}
var game = function(){
  let myOutputValue = ""
  let playerHand = []
  let sizeOfHand = ""
  while(isNaN(sizeOfHand) === false && Number.isInteger(sizeOfHand) == false)
  prompt("How many cards")
  let computerCard = shuffledDeck.pop();
  // Construct an output string to communicate which cards were drawn
  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  var winnerCard = cardComparator(player1Card, player2Card)

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
}
//set-up
var setup = function(){
  makeDeck()
  deck = [...shuffleCards(deck)]
}
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
    let j = Math.floor(Math.random() * shufflingDeck.length);
    let temp = shufflingDeck[i];
    shufflingDeck[i] = shufflingDeck[j];
    shufflingDeck[j] = temp;
  }
  return shufflingDeck
}
//Compare card and return winning card
var cardComparator = function(card1, card2){
  if(card1.rank === card2.rank){
    return false
  }
  else if (card1.rank > card2.rank) {
    // Add conditional-dependent text to the output string
    return true
    // Else if computer card rank is less than player card rank, player wins
  } 
  else if(card2.rank > card1.rank){
    return false
  }
}
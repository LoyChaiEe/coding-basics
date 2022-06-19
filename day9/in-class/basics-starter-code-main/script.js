var deck = []
var gamemode = "set-up"
const suit = ["❤️", "♦", "♣", "♠️"]
const cardName = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", ]
function Card(cardname, logo, number){
  this.name = cardname;
  this.suit = logo;
  this.rank = number
}
var playerChoiceWildCard = false
var wildCardEnabled = false
var wildCard = new Card("", "", 0)

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.

var main = function (input) {
  var output = ""
  switch(gamemode){
    case "set-up":
      output = `Welcome to Moar Cards!<br<br>Choose which mode you want to play:<br><br>1. High card<br>2. Low Card<br><br>Type in the number to choose.<br><br>` + setup()
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
  return output
};
var selectMode = function(userChoice){
  let output = ""
  switch(userChoice){
    case 1:
      gamemode = "High Card"
      output += `You have chose ${gamemode}. Press play to continue`
      break
    case 2:
      gamemode = "Low Card"
      output += `You have chose ${gamemode}. Press play to continue`
      break
  }

}
var game = function(){
  let myOutputValue = ""
  let playerHand = []
  let sizeOfHand = ""
  do{
    sizeOfHand = Number(prompt("How many cards do you want to draw", ""))
  }while(isNaN(sizeOfHand) === true || Number.isInteger(sizeOfHand) == false || sizeOfHand == "" || sizeOfHand == 0)
  for(let i = 0; i < sizeOfHand; i++){

  }
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
  let output = ""
  deck = [...shuffleCards(deck)]
  let playerChoice = ""
  let wildCardChoice = ""
  do{
    wildCardChoice = prompt("Do you want wild card to be enabled? Type in yes or no", "")
    wildCardChoice = wildCardChoice.toLowerCase()
  }while(wildCardChoice != "yes" && wildCardChoice != "no")
  if(wildCardChoice == "yes")
   wildCardEnabled = true
  while(playerChoice != "yes" && playerChoice != "no" && wildCardEnabled){
    playerChoice = prompt("Do you want to choose the wild card? Type in yes or no", "")
    playerChoice = playerChoice.toLowerCase()
    console.log(playerChoice != "yes" && playerChoice != "no")
    console.log(wildCardEnabled)
  }
  if(playerChoice == "yes")
   playerChoiceWildCard = true
  if(wildCardEnabled)
  {
    if(playerChoiceWildCard){
      let wildCardSuitnum = 0
      do{
        wildCard.name = prompt("Name of card:", "")
      }while(cardName.includes(wildCard.name) == false)
      do{
        wildCardSuitnum = Number(prompt("Choose the suit:\n\n1. Hearts\n2. Diamonds\n3. Clubs\n4. Spades\n\nType in the number 1 to 4", ""))
      }while(wildCardSuitnum != 1 && wildCardSuitnum != 2 && wildCardSuitnum != 3 && wildCardSuitnum != 4)
      wildCard.suit = suit[wildCardSuitnum]
    }
    else{
      wildCard.name = cardName[Math.floor(Math.random()*cardName.length)]
      wildCard.suit = suit[Math.floor(Math.random()*suit.length)]
    }
    output += `Wild card enabled is ${wildCardEnabled}. The wild card is ${wildCard.name} of ${wildCard.suit}.`
  }
  return output
}
var makeDeck = function(){
  for(let i = 0; i < suit.length; i++){
    for(let j = 0; j < cardName.length; j++)
    {
      let currentCard = new Card(cardName[j], suit[i], j + 1)
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
  else if (card1.rank > card2.rank || (card1.name == wildCard.name && card1.suit == wildCard.suit)) {
    // Add conditional-dependent text to the output string
    return true
    // Else if computer card rank is less than player card rank, player wins
  } 
  else if(card2.rank > card1.rank){
    return false
  }
}
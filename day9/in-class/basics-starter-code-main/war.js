var warDeck = []
var player1Deck = []
var player2Deck = []
var tempStorage = []
var gamemode = "Set-up"
function Card(cardName, logo, number){
  this.name = cardName;
  this.suit = logo;
  this.rank = number;
}

var main = function(input){
  var myOutputValue = "";
  switch(gamemode){
    case "Set-up":
      setUp();
      gamemode = "battle"
      myOutputValue = "Welcome to the game of war! Press the button to play"
      break;
    case "battle":
      myOutputValue += battle()
      break;
  }
  return myOutputValue;
}
var setUp = function(){
  makeWarDeck()
  var shuffledDeck = [...shuffleCards(warDeck)]
  for(let i = 0; i < warDeck.length; i++){
    if(i%2 === 0)
    {
      let currentCard = shuffledDeck.pop()
      currentCard.rank = 13
      player1Deck.push(currentCard)
    }
    else
    {
      let currentCard = shuffledDeck.pop()
      currentCard.rank = 13
      player2Deck.push(currentCard)
    }
  }
}

//Deck generator
var makeWarDeck = function(){
  var suit = ["❤️", "♦", "♣", "♠️"]
  var name = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
  for(let i = 0; i < suit.length; i++)
  {
    for(let j = 0; j < name.length; j++)
    {
      let currentCard = new Card(name[j], suit[i], j + 1)
      warDeck.push(currentCard)
    }
  }
}
//shuffle card
var shuffleCards = function(shufflingDeck){
  for (let i = 0; i < shufflingDeck.length; i++)
  {
    let j = Math.floor(Math.random() * shufflingDeck.length);
    let temp = shufflingDeck[i]
    shufflingDeck[i] = shufflingDeck[j]
    shufflingDeck[j] = temp
  }
  return shufflingDeck
}
//card comparator
var cardComparator = function(player1card, player2card){
  if(player1card.rank > player2card.rank)
   return true;
  if(player2card.rank > player1card.rank)
   return false;
}
//battle 
var battle = function(){
  let player1Hand = player1Deck.pop()
  let player2Hand = player2Deck.pop()
  let output = `Player 1 has ${player1Hand.name} of ${player1Hand.suit}.<br>Player 2 has ${player2Hand.name} of ${player2Hand.suit}.<br><br>`
  //check whether card in hand is equal, if equal start war
  if(player1Hand.rank === player2Hand.rank)
  {
    let output1 = ""
    output1 =  war(player1Hand, player2Hand, output1)
    output += 'It is a tie! War started! <br><br>' + output1
    return output
  }
  //if not equal check players' hand and determine winner
  var didPlayer1win = cardComparator(player1Hand, player2Hand)
  if(didPlayer1win)
  {
    player1Deck.unshift(player1Hand, player2Hand)
    output += "Player 1 win! Press play to continue.<br>Cards have been added to player 1's deck"
  }
  else
  {
    player2Deck.unshift(player1Hand, player2Hand)
    output += "Player 2 win! Press play to continue.<br>Cards have been added to player 2's deck"
  }
  if(player1Deck.length === 0 || player2Deck.length === 0){
    if(player1Deck.length === 0 )
     output += '<br><br>Player 1 Wins!'
    else
     output += '<br><br>Player 2 Wins!'
  }
  return output
}
//War function
var war = function(player1Card, player2Card, output){
  let didPlayer1win 
  let player1Hand = [];
  let player2Hand = [];
  //initialise set of cards
  for(let i = 0; i < 3; i++){
    if(player1Deck.pop() === undefined || player2Deck.pop())
    {
      if(player1Deck.pop() === undefined)
      {
        newCard = new Card("null", "emptiness", 0)
        player1Hand.unshift(newCard)
      }
      if(player1Deck.pop() === undefined)
      {
        newCard = new Card("null", "emptiness", 0)
        player1Hand.unshift(newCard)
      }
      break;
    }
    player1Hand.unshift(player1Deck.pop())
    player2Hand.unshift(player2Deck.pop())
    console.table(player1Hand)
    console.table(player2Hand)
  }
  tempStorage.unshift(...player1Hand, ...player2Hand)
  console.table(tempStorage)
  //compare rank of cards, if same skip and continue the loop
  for(let j = 0; j < 3; j++){
    output += `Player 1 has ${player1Hand[j].name} of ${player1Hand[j].suit}.<br>Player 2 has ${player2Hand[j].name} of ${player2Hand[j].suit}.<br><br>`
    if(player1Hand[j] === player2Hand[j]){
      continue
    }else{
      didPlayer1win = cardComparator(player1Hand[j], player2Hand[j])
      break;
    }
  }
  //if all 3 cards are tied
  if (didPlayer1win === undefined)
  {
    output += 'It is a tie! War started! <br><br>' + war(player1Card, player2Card, output)
    return output
  }
  if(didPlayer1win)
  {
    player1Deck.unshift(player1Card, player2Card, ...tempStorage)
    tempStorage = [];
    output += "Player 1 win! Press play to continue.<br>Cards have been added to player 1's deck"
  }
  else
  {
    player2Deck.unshift(player1Card, player2Card, ...tempStorage)
    tempStorage = [];
    output += "Player 2 win! Press play to continue.<br>Cards have been added to player 2's deck"
  }
  return output
}
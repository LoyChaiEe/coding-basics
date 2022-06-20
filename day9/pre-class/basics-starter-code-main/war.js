//Initialise global variables
var warDeck = []
var player1Deck = []
var player2Deck = []
var tempStorage = []
var gamemode = "Set-up"
//Constructor function for card. Look up on constructors if you dont know
function Card(cardName, logo, number){
  this.name = cardName;
  this.suit = logo;
  this.rank = number;
}
//main function for flow of the game
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
  /* You cannot copy an array to another copyarray using assignment operator: =
     You have to somehow use a function or a way to break up and slowly push/assign each individual elements of the array to the copyarray
     Why you cannot? Cause array are also treated as object (from what i searched online) 
     So if you change anything in either the original or copied array, it will also makes changes for the other array.(tldr: they are linked)
     So I used a spread operator: ... to slowly assigned the values of the shuffled cards in to the shuffled deck
  */
  var shuffledDeck = [...shuffleCards(warDeck)]
  for(let i = 0; i < warDeck.length; i++){
    if(i%2 === 0)
    {
      player1Deck.push(shuffledDeck.pop())
    }
    else
    {
      player2Deck.push(shuffledDeck.pop())
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
//battle function
var battle = function(){
  let player1Hand = player1Deck.pop()
  let player2Hand = player2Deck.pop()
  let output = `Player 1 has ${player1Hand.name} of ${player1Hand.suit}.<br>Player 2 has ${player2Hand.name} of ${player2Hand.suit}.<br><br>`
  //check whether card in hand is equal, if equal start war
  if(player1Hand.rank === player2Hand.rank)
  {
    let output1 = ""
    output1 =  war(player1Hand, player2Hand, output1) //the two line are for format purpose
    output += 'It is a tie! War started! <br><br>' + output1
    console.log(player1Deck.length)
    console.log(player2Deck.length)
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
  //If either of players have no cards left
  if(player1Deck.length === 0 || player2Deck.length === 0){
    gamemode = "Set-up"
    if(player1Deck.length === 0 )
     output += '<br><br>Player 1 Wins!'
    else
     output += '<br><br>Player 2 Wins!'
  }
  console.log(player1Deck.length)
  console.log(player2Deck.length)
  console.table(player1Deck)
  console.table(player2Deck)
  return output
}
//War function
var war = function(player1Card, player2Card, output){
  let didPlayer1win 
  let player1Hand = [];
  let player2Hand = [];
  //initialise set of cards
  /*It was a messy mess to debug this part but got it down*/
  for(let i = 0; i < 3; i++){
    /*Why do I initialise 2 new var instead of pushing the array directly using .push?
       It is because I do not want to push an undefined value into the array.
       It will cause more issue later.
    */
    let player1NewCard = player1Deck.pop()
    let player2NewCard = player2Deck.pop()
    //Check for undefined value
    /*Do not use .pop() function to check for undefined value!
       It is true that if you use .pop() on an empty array it will give an undefined error
       but at the same time, each time you check you will pop one element too whether the array is empty or not.
       So instead of popping one element from an array and pushing that element to another,
       if you use .pop to check you will be popping multiple elements from the array and only pushing one in this case
       so just use a variable to check for undefined value
    */
    //if undefined valu detected, push an empty card and break the loop so the person who did not draw enough cards will lose
    if(player1NewCard === undefined || player2NewCard === undefined){
      if(player1NewCard === undefined){
        player1Hand.push(new Card("null", "Emptiness", 0))//empty card to gurantee loss
      }
      if(player2NewCard === undefined){
        player2Hand.push(new Card("null", "Emptiness", 0))
      }
      break;
    }
    player1Hand.push(player1NewCard)
    player2Hand.push(player2NewCard)
  }
  tempStorage.push(...player1Hand, ...player2Hand)
  if(tempStorage.length >= 70)
  {
    return "test cleared";
  }
  //compare rank of cards, if same skip and continue the loop
  for(let j = 0; j < 3; j++){
    output += `Round ${j + 1}:<br>Player 1 has ${player1Hand[j].name} of ${player1Hand[j].suit}.<br>Player 2 has ${player2Hand[j].name} of ${player2Hand[j].suit}.<br><br>`
    if(player1Hand[j].rank === player2Hand[j].rank){
      continue
    }
    else{
      didPlayer1win = cardComparator(player1Hand[j], player2Hand[j])
      break;
    }
  }
  //if all 3 cards are tied
  if (didPlayer1win === undefined)
  {
    //formating
    output += 'It is a tie! War started! <br><br>'
    output += war(player1Card, player2Card, output)
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
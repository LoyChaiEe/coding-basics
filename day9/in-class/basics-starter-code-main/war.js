var deck = []
var player1Deck = []
var player2Deck = []

var main = function(input){
    makeDeck()
    var shuffledDeck = shuffleCards(deck);
    for(let i = 0; i < shuffledDeck.length; i++){
        if(i%2 == 0)
         player1Deck.push(shuffledDeck.pop())
        else
         player2Deck.push(shuffledDeck.pop())
    }
    var myOutputValue = "Hello World";
    return myOutputValue;
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
      let j = Math.floor(Math.random() * i);
      let temp = shufflingDeck[i];
      shufflingDeck[i] = shufflingDeck[j];
      shufflingDeck[j] = temp;
    }
    return shufflingDeck
  }

  var war = function(){

  }
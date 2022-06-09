//word game
var numOfguessToWin = 0;
var userWins = 0;
var prevWord = 5;
//dice game
var withinNumber = 3;

var randomWordGenerator = function(){
  var num;
  do{
    num = Math.floor(Math.random()*3);
  }while(num == prevWord)
  prevWord = num;
  switch(num){
    case 0: return "banana";
    case 1: return "chisel";
    case 2: return "faucet";
  }
}

var secretWord = function(userGuess){
  if(numOfguessToWin == 0)
  {
    numOfguessToWin = Math.floor(Math.random() * 3) + 2;
  }
  var computerWord = randomWordGenerator();
  var output = `Your guess is ${userGuess}. The secret word is ${computerWord}.`;
  if (userGuess != computerWord && userWins != numOfguessToWin)
   userWins = 0
  if (userGuess === computerWord)
   userWins++;
  if(userGuess === computerWord && userWins === numOfguessToWin)
  {
    numOfguessToWin = 0;
    userWins = 0;
    output = output + " You Win!"
    return output
  }
  output = output + `You need ${numOfguessToWin - userWins} guess to win.`
  return output
}

var main = function (input) {
  //myOutputValue = secretWord(input);
  myOutputValue = dicegame(input);
  return myOutputValue;
};

var dicegame = function (input) {
  var userGuess = Number(input)
  var dice1 = rollDice();
  var dice2 = rollDice();
  var myOutputValue = "you lose";
  if (
    (userGuess < dice1 + withinNumber && userGuess > dice1 - withinNumber) ||
    (userGuess < dice2 + withinNumber && userGuess > dice2 - withinNumber)
  ) {
    myOutputValue = "you win";
    withinNumber = Math.floor(Math.random() * 3) + 1;

  }
  return myOutputValue;
};

var rollDice = function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
};
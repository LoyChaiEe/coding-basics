var prevRoll = 0; //6
var win = 0;
var gamesPlayed = 0; 

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var main = function (input) {
  var randomDiceNumber = rollDice();
  gamesPlayed++; 
  var myOutputValue = `Your last roll was ${prevRoll}. You rolled a ${randomDiceNumber}. You guess ${input}.`;
  
  if (randomDiceNumber == input) {
    win++;
    myOutputValue = myOutputValue + " You win!" + "<br/><br/><br/>" + `Your total wins is ${win}. Your win percentage is ${((win/gamesPlayed) * 100).toFixed(2)}%`;
  }
  else{
    myOutputValue =
      myOutputValue +
      " You lose!" +
      "<br/><br/><br/>" +
      `Your total wins is ${win}. Your win percentage is ${
        ((win/gamesPlayed) * 100).toFixed(2)
      }%`;
  }
  prevRoll = randomDiceNumber;
  return myOutputValue;
};

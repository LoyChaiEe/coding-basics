/*
How many hours did you spend on this assignment?:
Ans: 4 hours
What part of the assignment did you spend the most time on?:
Ans: Calculating percentages and using helper functions
How comfortable did you feel with this assignment? (1-5):
Ans: 3
Is there anything in this code that you feel pleased about?:
Ans: Making the input case-sensitive
What's one aspect of your code you would like specific, elaborate feedback on?:
Ans: Is my pseudocode clear for someone else reading/working on my code?
*/

var userName = "";
var gameMode = "get username";
var playerScore = 0;
var computerScore = 0;
var drawCounter = 0;
var totalGamesPlayed = 0;

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "get username") {
    myOutputValue = getUserName(input);
    if (userName == "") {
      gameMode = "get username";
      return `Please enter a valid player name.`;
    }
  } else if (gameMode == "challenge") {
    myOutputValue = generateResultMessage(input, userName);
  }
  return myOutputValue;
};

//get player name and switch game mode when done
var getUserName = function (input) {
  userName = input;
  gameMode = "challenge";
  return `Hello ${userName}, Let's get started! Please input either "scissors", "paper" or "stone" to challenge!`;
};

//computer chooses scissors paper stone at random
var scissorsPaperStone = function () {
  var randomDigit = Math.random() * 3;
  var randomInteger = Math.floor(randomDigit);
  var scissors = 0;
  var paper = 1;
  var stone = 2;

  if (randomInteger == scissors) {
    return "scissors";
  }
  if (randomInteger == paper) {
    return "paper";
  }
  if (randomInteger == stone) {
    return "stone";
  }
};

//calculate result of game
var challengeResult = function (input, computerChoice) {
  totalGamesPlayed += 1;
  if (input.toLowerCase() == computerChoice) {
    result = "it's a draw";
    drawCounter += 1;
  }
  if (
    (input.toLowerCase() == "scissors" && computerChoice == "stone") ||
    (input.toLowerCase() == "stone" && computerChoice == "paper") ||
    (input.toLowerCase() == "paper" && computerChoice == "scissors")
  ) {
    result = "you lose";
    computerScore += 1;
  }
  if (
    (input.toLowerCase() == "scissors" && computerChoice == "paper") ||
    (input.toLowerCase() == "stone" && computerChoice == "scissors") ||
    (input.toLowerCase() == "paper" && computerChoice == "stone")
  ) {
    result = "you win";
    playerScore += 1;
  }
  return result;
};

//calculate win/loss/draw percentages
var calculatePercentages = function (score, gamesPlayed) {
  var percentage = `${((score / gamesPlayed) * 100).toFixed(2)}%`;
  return percentage;
};

//generate the result of the game
var generateResultMessage = function (input, userName) {
  //check validity of input
  if (
    input.toLowerCase() == "scissors" ||
    input.toLowerCase() == "paper" ||
    input.toLowerCase() == "stone"
  ) {
    //computer chooses an option
    var computerChoice = scissorsPaperStone();

    //results of the game
    var result = challengeResult(input, computerChoice);
    var winPercentage = calculatePercentages(playerScore, totalGamesPlayed);
    var losePercentage = calculatePercentages(computerScore, totalGamesPlayed);
    var drawPercentage = calculatePercentages(drawCounter, totalGamesPlayed);

    //return the game results
    return `${userName}, you chose ${input}, the computer chose ${computerChoice}, ${result}! 
    <br><br> Your win percentage: ${winPercentage} 
      <br><br> Computer's win percentage: ${losePercentage} 
      <br><br> Draw percentage: ${drawPercentage}`;
  } else
    return `Hello ${userName}, please input either "scissors", "paper" or "stone" to challenge!`;
};

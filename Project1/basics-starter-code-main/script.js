/*
How many hours did you spend on this assignment?: 4 hours

What part of the assignment did you spend the most time on?: First part was reverse as i wanted to reuse the same function for normal mode, then Redo-ing the whole project to integrate both part 1 and part 2 together, and then adding features

How comfortable did you feel with this assignment? (1-5): 3.5

Is there anything in this code that you feel pleased about?: The ability for user to switch control easily and no unitentional error (hopefully)

What's one aspect of your code you would like specific, elaborate feedback on?: tbh, Im not sure. Maybe making the code more readadle or optimizing? But feel free to be as critical as possible so I can learn.

*/

const scissors = "scissors";
const paper = "paper";
const stone = "stone";
const instruction = "Type in Scissors, Paper, Stone to play";
const changeMode = "If you want to change mode, type: Select Mode";
var userSPS = "";
var userObjectIcon = "";
var comSPS = "";
var comObjectIcon = "";
var gameMode = "Username";
var prevWinner = "None"; //for muk-jji-ppa
var username = "";
var gamesPlayed = 0;
var gamesWin = 0;
var gamesDraw = 0;
var gameslost = 0;

//Gamemode control flow
var main = function (input) {
  console.log(username);
  var myOutputValue;
  switch (gameMode) {
    case "Username":
      myOutputValue = userName(input);
      break;
    case "Select Mode":
      myOutputValue = selectMode();
      break;
    case "Update Game Mode":
      myOutputValue = updateGameMode(input);
      break;
    case "Normal":
      myOutputValue = normalMode(input);
      break;
    case "Reverse":
      myOutputValue = normalMode(input);
      break;
    case "muk-jji-ppa":
      myOutputValue = koreanSPS(input);
      break;
    case "CPU Vs CPU":
      myOutputValue = cpuVScpu(input);
      break;
    case "Stats":
      myOutputValue = stats();
      break;
    default:
      myOutputValue = "Invalid Input!!" + "<br/><br/>" + selectMode();
      break;
  }

  return myOutputValue;
};
//Record user's name and check whether user left it blank
//accept user's name via input
//return with a welcoming message with the user's name
var userName = function (name) {
  if(name == ""){
    username = prompt("Please enter your name", "");
    return userName(username); //meant to check whether user left it blank, if not will go to else code
  }
  else{
    gameMode = "Select Mode";
    return `Welcome, ${username}. Please click the button to proceed`;
  }
};
//selectMode function
//List the mode that the user wish to play
//No input needed, autoprint the menu when user press button
var selectMode = function () {
  var output =
    "Please choose and key in the type of Scissors Paper stone mode you want to play:" +
    "<br/><br/>" +
    "1. Normal" +
    "<br/>" +
    "2. Reverse" +
    "<br/>" +
    "3. muk-jji-ppa" +
    "<br/>" +
    "4. CPU Vs CPU" +
    "<br/>" +
    "5. Stats";
  gameMode = "Update Game Mode";
  return output;
};
//Based on user's choices, update the game mode
//input: user's game mode choice
//output: message to let the player what mode they choose and can begin the game
var updateGameMode = function (userChoice) {
  userChoice = userChoice.toLowerCase();
  switch (userChoice) {
    case "normal":
      gameMode = "Normal";
      return `You have choosen ${gameMode}. ` + instruction;
    case "reverse":
      gameMode = "Reverse";
      return `You have choosen ${gameMode}. ` + instruction;
    case "muk-jji-ppa":
      gameMode = "muk-jji-ppa";
      return `You have choosen ${gameMode}. ` + instruction;
    case "cpu vs cpu":
      gameMode = "CPU Vs CPU";
      return (
        `You have choosen ${gameMode}. ` + "<br/>" + "Click the button to play"
      );
    case "stats":
      return stats();
    default:
      return "Invalid Input! " + "<br/><br/><br/>" + selectMode();
  }
};
//only run if game mode is stats
//View user's stats for the session
//no input needed, just print out stats for user
var stats = function () {
  var output =
    `${username}'s stats:` +
    "<br/><br/>" +
    `Total number of games played: ${gamesPlayed}` +
    "<br/>" +
    `Total number of wins: ${gamesWin}` +
    "<br/>" +
    `Total number of losses: ${gameslost}` +
    "<br/>" +
    `Total number of draws: ${gamesDraw}` +
    "<br/>" +
    `Win ratio(Total): ${winRatio(gamesWin, gamesPlayed)}%` +
    "<br/><br/><br/>" +
    "Type 'Select Mode' to return to main menu.";
  return output;
};
//Win ratio, mainly just for formating for 0 games played
var winRatio = function (gamesWin, totalgames) {
  if (totalgames == 0) return (0).toFixed(2);
  else return ((gamesWin / totalgames) * 100).toFixed(2);
};
//Computer-generated SPS
//no input needed, out scissors/paper/stone for computer
var comSPSggenerator = function () {
  var num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return scissors;
    case 1:
      return paper;
    case 2:
      return stone;
  }
};
//Object Icon
//input: user/coms' object
//output: the icon for the object
var getObjectIcon = function (object) {
  if (object == scissors) return " ✂️";
  if (object == paper) return " 🗒";
  if (object == stone) return " 🪨";
  else return "Invalid input";
};
//Refactoring of code for normal/muk-jji-ppa/reverse/com vs com mode
//generate user and computer input
//input: user' choice of scissors paper stone
//no output, meant to update user's choice and computer' choice
var generateSPS = function(userInput){
  if(gameMode == "CPU Vs CPU")
    userSPS = comSPSggenerator();
  else 
   userSPS = userInput.toLowerCase();
  userObjectIcon = getObjectIcon(userSPS);
  comSPS = comSPSggenerator();
  comObjectIcon = getObjectIcon(comSPS);
}
//Normal and Reverse Mode
//exceute only when game mode is reverse or normal
//input: user choice of scissors paper stone
//output: tell the user you win/lose/draw
var normalMode = function (userInput) {
  //Check whether user want to select different gameMode
  if (userInput === "Select Mode") {
    gameMode = "Select Mode";
    return selectMode();
  }
  gamesPlayed++;
  generateSPS(userInput);
  var output =
    `You choose ${userSPS}. ${userObjectIcon}` +
    "<br/>" +
    `Computer chooses ${comSPS}. ${comObjectIcon}`;
  var didUserWin = false;
  if (gameMode === "Reverse") 
   didUserWin = true;
  //Draw
  if (userSPS === comSPS) {
    gamesDraw++;
    output =
      output +
      "<br/>" +
      "It is a draw" +
      "<br/><br/><br/>" +
      instruction +
      " again" +
      "<br/><br/>" +
      changeMode;
    return output;
  }
  //check did user win or lose
  if (
    (userSPS === scissors && comSPS === paper) ||
    (userSPS === stone && comSPS === scissors) ||
    (userSPS === paper && comSPS === stone)
  ) {
    didUserWin = !didUserWin;
  }

  if (didUserWin) {
    //game win
    gamesWin++;
    output =
      output +
      "<br/>" +
      "You Win" +
      "<br/><br/><br/>" +
      instruction +
      " again" +
      "<br/><br/>" +
      changeMode;
  } //game lost
  else {
    gameslost++;
    output =
      output +
      "<br/>" +
      "You Lose" +
      "<br/><br/><br/>" +
      instruction +
      " again" +
      "<br/><br/>" +
      changeMode;
  }

  return output;
};
//Korean SPS mode
//exceute only when game mode is reverse or normal
//input: user choice of scissors paper stone
//output: tell the user you win/lose/draw
var koreanSPS = function (userInput) {
  //Check whether user want to select different gameMode
  if (userInput === "Select Mode") {
    gameMode = "Select Mode";
    return selectMode();
  }
  generateSPS(userInput);
  
  var output =
    `You choose ${userSPS}. ${userObjectIcon}` +
    "<br/>" +
    `Computer chooses ${comSPS}. ${comObjectIcon}`;
  //First game, but it is a draw
  comSPS = scissors;
  if (userSPS === comSPS && prevWinner === "None") {
    gamesDraw++;
    gamesPlayed++;
    output = output + "<br/>It is a draw" + "<br/><br/><br/>" + instruction;
    return output
  }
  //Attacker/Defender has been determine in first game, now determining who wins the game
  if (
    userSPS === comSPS &&
    (prevWinner === "Player" || prevWinner === "Computer")
  ) {
    if (prevWinner === "Player") {
      // player wins
      gamesWin++;
      gamesPlayed++;
      prevWinner = "None";
      output =
        output +
        "<br/><br/>" +
        "The Computer matches the same symbol as you" +
        "<br/>" +
        "You Win!" +
        "<br/><br/><br/>" +
        instruction +
        " again" +
        "<br/><br/>" +
        changeMode;
      return output;
    }
    if (prevWinner === "Computer") {
      //player lose
      gameslost++;
      gamesPlayed++;
      prevWinner = "None";
      output =
        output +
        "<br/><br/>" +
        "The Computer matches the same symbol as you" +
        "<br/>" +
        "You lose!" +
        "<br/><br/><br/>" +
        instruction +
        " again" +
        "<br/><br/>" +
        changeMode;
      return output;
    }
  }
  //Determining first game winner
  //player is attacker
  if (
    (userSPS === scissors && comSPS === paper) ||
    (userSPS === stone && comSPS === scissors) ||
    (userSPS === paper && comSPS === stone)
  ) {
    prevWinner = "Player";
    output =
      output +
      "<br/><br/>" +
      "You are the attacker." +
      "<br/>" +
      "Computer is the defender" +
      "<br/><br/>" +
      "You will win if the computer matches the same SPS as you in the next round" +
      "<br/><br/>" +
      instruction;
  }
  //computer is attacker
  else {
    prevWinner = "Computer";
    output =
      output +
      "<br/><br/>" +
      "Computer is the attacker." +
      "<br/>" +
      "You are the defender" +
      "<br/><br/>" +
      "You will lose if the computer matches the same SPS as you in the next round" +
      "<br/><br/>" +
      instruction;
  }
  return output;
};
//CPU VS CPU
//only run if game mode is cpu
//input user's choice
var cpuVScpu = function (userInput) {
  //Check whether user want to select different gameMode
  if (userInput === "Select Mode") {
    gameMode = "Select Mode";
    return selectMode();
  }
  gamesPlayed++;
  //generate user and computer input
  generateSPS(userInput);
  var output =
    `You choose ${userSPS}. ${userObjectIcon}` +
    "<br/>" +
    `Computer chooses ${comSPS}. ${comObjectIcon}`;
  var didUserWin = false;
  //Draw
  if (userSPS === comSPS) {
    gamesDraw++;
    output =
      output +
      "<br/><br/>" +
      "It is a draw" +
      "<br/><br/><br/>" +
      instruction +
      " again" +
      "<br/><br/>" +
      changeMode;

    return output;
  }
  //check did user win or lose
  if (
    (userSPS === scissors && comSPS === paper) ||
    (userSPS === stone && comSPS === scissors) ||
    (userSPS === paper && comSPS === stone)
  ) {
    didUserWin = !didUserWin;
  }
  if (didUserWin) {
    gamesWin++;
    output =
      output +
      "<br/>" +
      "You Win" +
      "<br/><br/><br/>" +
      instruction +
      " again" +
      "<br/><br/>" +
      changeMode;
  } else {
    gameslost++;
    output =
      output +
      "<br/>" +
      "You Lose" +
      "<br/><br/><br/>" +
      instruction +
      " again" +
      "<br/><br/>" +
      changeMode;
  }
  return output;
};
//Use loops to create an app that draws emojis into the grey box. See here for how to input Emoji on Windows and here for how to input emoji on Mac
var myOutputValue = "";
var main = function (input) {
  var i = 0;
  while (i < input){
    var j = 0;
    while (j <= i){
      myOutputValue += "❤";
      j++;
    }
    myOutputValue += "<br>";
    i++;
  }
  console.log(myOutputValue);
  return myOutputValue;
};
//user to gues a number from 1 to 6
var main = function(input){
  if (userInput < 1 || userInput > 6){
    //tell user is invalid input
    //pls try  again
  }
  //other code uses input
}
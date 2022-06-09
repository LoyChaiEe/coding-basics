var main = function (input) {
  var dice1 = rolldice();
  var dice2 = rolldice();
  if (input == dice1 || input == dice2 || dice1 + dice2 == 11) {
    return (myOutputValue = "you win");
  }
  return (myOutputValue = "you lose");
};

var rolldice = function () {
  var dice = Math.floor(Math.random() * 6 + 1);
  return dice;
};

var hawkerApp = function (hawkerFood) {
  if (
    hawkerFood == "chicken rice" ||
    hawkerFood == "nasi lemak" ||
    hawkerFood == "bak kut teh"
  ) {
    console.log("This hawker food contain rice");
  }

  if (hawkerFood == "hokkien mee" || hawkerFood == "laksa") {
    console.log("This hawker food contain noodles");
  } else {
    console.log("Others");
  }
};

var lucky4D = function (guess) {
  var digit1 = randomNumGenerator();
  var digit2 = randomNumGenerator();
  var digit3 = randomNumGenerator();
  var digit4 = randomNumGenerator();
  if (
    guess == digit1 ||
    guess == digit2 ||
    guess == digit3 ||
    guess == digit4
  ) {
    console.log("You won the 4D");
  }
};

var randomNumGenerator = function () {
  var num = Math.floor(Math.random() * 10);
  return num;
};

var freeMeal = function (guess) {
  var uncleDish = uncleDish();
  if (guess == uncleDish) {
    console.log("you won a free meal");
  }
};

var uncleDish = function () {
  var num = Math.floor(Math.random() * 6);
  switch (num) {
    case 0:
      var dish = "chicken rice";
      break;
    case 1:
      var dish = "roti prata";
      break;
    case 2:
      var dish = "nasi lemak";
      break;
    case 3:
      var dish = "hokkien mee";
      break;
    case 4:
      var dish = "bak kut teh";
      break;
    case 5:
      var dish = "laksa";
      break;
  }

  return dish;
};

var lucky4D = function (guess) {
  var digit1 = randomNumGenerator();
  var digit2 = randomNumGenerator();
  var digit3 = randomNumGenerator();
  var digit4 = randomNumGenerator();
  var num =
    Number(digit1 * 1000) +
    Number(digit2 * 100) +
    Number(digit3 * 10) +
    Number(digit4);
  if (guess < Number(num + 1000) && guess > Number(num - 1000)) {
    console.log("You won the 4D");
  } else {
    console.log("You lose");
  }
};

//user input: rice / noodle
//if rice choose 2 out 3 random rice dish "chicken rice", "nasi lemak", and "bak kut teh"
//if noodle choose 2 out 3 random noodle dish "hokkien mee", "laksa", and "beef hor fun"
// roti prata can be one of the dishes
// function for description of dish
// non-sambal dish: roti-prata and bak kut teh, tell user sambal included

var omakase = function (typeOfDish) {
  if (typeOfDish === "rice") {
    var dish1 = riceDish();
    var dish2 = riceDish();
    while (dish1 === dish2) {
      dish2 = riceDish();
    }
  }

  if (typeOfDish === "noodles") {
    var dishnum1 = noodleDish();
    var dishnum2 = noodleDish();
    while (dishnum1 === dishnum2) {
      dishnum2 = noodleDish();
    }
  } else {
    return (myOutputValue = "Invalid input");
  }

  isSambal(dishnum1, dishnum2);
};

var isSambal = function (dish1, dish2) {
  if (dish1 == "roti-prata" || dish1 == "bak kut teh") {
    return "Sambal is not served";
  } else if (dish2 == "roti-prata" || dish2 == "bak kut teh") {
    return "Sambal is not served";
  } else {
    return "Sambal is served";
  }
};

var riceDish = function () {
  var num = Math.floor(Math.random() * 4);
  switch (num) {
    case 0:
      return "chicken rice";
    case 1:
      return "nasi lemak";
    case 2:
      return "bak kut teh";
    case 3:
      return "roti-prata";
  }
};
var noodleDish = function () {
  var num = Math.floor(Math.random() * 4);
  switch (num) {
    case 0:
      return "hokkien mee";
    case 1:
      return "nasi lemak";
    case 2:
      return "bak kut teh";
    case 3:
      return "roti-prata";
  }
};

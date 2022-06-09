//user input: rice / noodle (done)
//if rice choose 2 out 3 random rice dish "chicken rice", "nasi lemak", and "bak kut teh" (done)
//if noodle choose 2 out 3 random noodle dish "hokkien mee", "laksa", and "beef hor fun" (done)
// roti prata can be one of the dishes (done)
// function for description of dish 
// non-sambal dish: roti-prata and bak kut teh, tell user sambal included (done)

var main = function (input) {
  console.log(input === "rice");
  if (input === "rice") {
    var dish1 = riceDish();
    var dish2 = riceDish();
    while (dish1 === dish2) {
      dish2 = riceDish();
    }
  } else if (input === "noodles") {
    var dishnum1 = noodleDish();
    var dishnum2 = noodleDish();
    while (dishnum1 === dishnum2) {
      dishnum2 = noodleDish();
    }
  } else {
    return (myOutputValue = "Invalid input");
  }

  var myOutputValue =
    `The first dish is ${dish1}.` +
    "<br/><br/>" +
    `The second dish is ${dish2}. ` +
    "<br/><br/>" +
    `${isSambal(dishnum1, dishnum2)}`;
  console.log(myOutputValue);
  return myOutputValue;
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

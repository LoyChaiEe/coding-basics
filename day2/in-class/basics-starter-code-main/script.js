var main = function (input) {
  var myOutputValue = costOfAircon(input);
  //var myOutputValue = screemTime(input);
  //var myOutputValue = iceMachine(input);
  //var myOutputValue = beerOrder(input);
  //var myOutputValue = costOfData(input);
  //var myOutputValue = mortgageCalculator(input, interest , years);
  return myOutputValue;
};

var costOfAircon = function (numOfHours) {
  var electricityUsed = numOfHours * 2;
  var electricityyCost = electricityUsed * 0.2;
  return electricityUsed;
};

var screenTime = function (dailyNumOfHours) {
  totalNumOfHours = dailyNumOfHours * 365 * 82;
  totalDaysOnApp = totalNumOfHours / 24;
  return totalDaysOnApp;
};

var iceMachine = function (numOfGuests) {
  totalIceCube = numOfGuests * 2 * 4 * 1.5;
  massOfIceInPounds = totalIceCube / 454;
  return massOfIceInPounds;
};

var beerOrder = function (numOfCustomer) {
  var totalBeer = numOfCustomer * 2 * 90;
  var numOfKegs = totalBeer / 62;
  return numOfKegs;
};

var costOfData = function(numOfGB){
  var numOfPlan = Math.ceil(numOfGB/50);
  var totalCost = numOfPlan * 19.99;
  var costPerGB = totalCost / numOfGB;
};

var mortgageCalculator = function(loanAmount, interest , years){
  var amountOwed = loanAmount*(1 + Number(interest)*Number(years));
  var interestOwed = amountOwed - loanAmount;
  var monthlyPayment = amountOwed / 120;
  var output = `The total amount owed is ${amountOwed}, the interest is ${interestOwed}, your monthly payment is ${monthlyPayment}`;
  return output;
};
var beerOrder = function(numOfCustomer){
  var totalBeer = numOfCustomer * 2 * 90;
  var numOfKegs = totalBeer /62;
  return numOfKegs;
};

var iceMachine = function(numOfGuests){
  totalIceCube = numOfGuests*2*4*1.5;
  massOfIceInPounds = totalIceCube / 454;
  return massOfIceInPounds;
};

var screenTime = function(dailyNumOfHours){
  totalNumOfHours = dailyNumOfHours * 365 *82;
  totalDaysOnApp = totalNumOfHours /24;
  return totalDaysOnApp;
};

var costOfAircon = function(numOfHours){
  var electricityUsed = numOfHours * 2;
  var electricityyCost = electricityUsed *0.2;
  return electricityUsed;
};

var timeToTyypeSonnet = function(typingSpeed){
  var timeTaken = 17677 / typingSpeed;
  var myOutputValue = 'You will take ' + Number(timeTaken/60).toFixed(3) + " Hours to type out Shakespeare's sonnets"
  return myOutputValue
};

var iceCreammBuffet = function(noOfTrips){
  var amountOfIceCream = noOfTrips * 70;
  var numOfContainers = amountOfIceCream / 400;
  var myOutputValue = 'The number of container(s) needed is ' + Math.ceil(Number(numOfContainers));
  return myOutputValue;
};

var roadTripCost = function(distance){
  var litreConsumed = distance / 9;
  var petrolCost = litreConsumed * 2.2;
  var myOutputValue = 'For aa road trip of ' + distance + ' km, the petrol cost will be $' + Number(petrolCost).toFixed(2);
  return myOutputValue
};

var fahrenheitToCelsius = function (tempInnFahrenheit) {
 var tempInCelsius = (tempInnFahrenheit - 32) * (5 / 9);
  return tempInnFahrenheit + "F is " + Number(tempInCelsius).toPrecision(5) + ' in Celsius';
};

var weeksTominutes = function (numWeeks) {
  var numOfdays = numWeeks * 7;
  var numOfhours = numOfdays * 24;
  var numOfMinutes = numOfhours * 60;
  return "In " + numWeeks + " weeks, there are " + numOfMinutes + " minutes! Wow!";
};
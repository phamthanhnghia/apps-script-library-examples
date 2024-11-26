// Generate random integers within a range
function generateRandomNumbers() {
  var min = 1;
  var max = 100;
  var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  Logger.log("Random Integer: " + randomInt);
}

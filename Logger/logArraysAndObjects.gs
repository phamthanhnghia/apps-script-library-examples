// This script logs arrays and JSON objects
function logArraysAndObjects() {
  var array = [1, 2, 3, 4, 5];
  var object = { name: 'Alice', email: 'alice@example.com' };
  
  Logger.log('Array: %s', JSON.stringify(array)); // Logs array as a JSON string
  Logger.log('Object: %s', JSON.stringify(object)); // Logs object as a JSON string
}

// This script logs the execution time of a function
function logExecutionTime() {
  var startTime = new Date();
  
  // Perform some operations
  for (var i = 0; i < 100000; i++) {
    Math.sqrt(i);
  }
  
  var endTime = new Date();
  Logger.log('Execution Time: %s ms', endTime - startTime); // Logs the time difference
}

// This script logs each iteration in nested loops
function logNestedLoops() {
  for (var i = 1; i <= 3; i++) {
    Logger.log('Outer loop iteration: %s', i);
    for (var j = 1; j <= 2; j++) {
      Logger.log('  Inner loop iteration: %s', j);
    }
  }
}

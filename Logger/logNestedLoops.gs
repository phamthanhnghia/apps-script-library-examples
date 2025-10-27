/**
 * @description Demonstrates logging each iteration in nested loops.
 * This is a common debugging technique to trace the flow of execution in loops.
 */
function logNestedLoops() {
  const outerLoopLimit = 3;
  const innerLoopLimit = 2;

  for (let i = 1; i <= outerLoopLimit; i++) {
    Logger.log(`Outer loop iteration: ${i}`);
    
    for (let j = 1; j <= innerLoopLimit; j++) {
      Logger.log(`  Inner loop iteration: ${j}`);
    }
  }
}
/**
 * @description Measures and logs the execution time of a specific operation.
 * This is useful for identifying performance bottlenecks in your code.
 */
function logExecutionTime() {
  const startTime = new Date().getTime();

  // --- Operation to be measured starts here ---
  let message = '';
  for (let i = 0; i < 10000; i++) {
    // Simulating a task, like building a string or processing data.
    message += 'a';
  }
  // --- Operation to be measured ends here ---

  const endTime = new Date().getTime();
  const executionTime = endTime - startTime;

  Logger.log(`The operation took ${executionTime} milliseconds to complete.`);
}
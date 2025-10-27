/**
 * @description Demonstrates how to pause script execution for a specified duration.
 *
 * `Utilities.sleep()` is useful for:
 * - Waiting between API calls to respect rate limits.
 * - Introducing a delay in loops to process tasks at a slower pace.
 * - Simulating a delay for testing purposes.
 *
 * IMPORTANT: The time spent sleeping counts towards the total script execution time limit
 * (e.g., 6 minutes for consumer accounts, 30 minutes for Workspace accounts).
 * Use it judiciously.
 *
 * @see https://developers.google.com/apps-script/reference/utilities#sleep(Integer)
 */
function demonstrateSleep() {
  Logger.log('Starting a process with delays...');

  const itemsToProcess = ['Item A', 'Item B', 'Item C'];
  const delayMilliseconds = 2000; // 2 seconds

  itemsToProcess.forEach((item, index) => {
    Logger.log(`Processing ${item}...`);
    
    // Perform some action with the item here
    
    if (index < itemsToProcess.length - 1) {
      Logger.log(`Waiting for ${delayMilliseconds / 1000} seconds before processing the next item.`);
      Utilities.sleep(delayMilliseconds);
    }
  });

  Logger.log('...process complete.');
}
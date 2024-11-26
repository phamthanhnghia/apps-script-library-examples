/**
 * Set a specific time trigger to run at a specific date and time.
 */
function setSpecificTimeTrigger() {
  const date = new Date();
  date.setHours(date.getHours() + 1); // Set to run in 1 hour

  ScriptApp.newTrigger('myScheduledFunction')
    .timeBased()
    .at(date)
    .create();
}

/**
 * Example function to be triggered at a specific time.
 */
function myScheduledFunction() {
  Logger.log('Scheduled function executed at: ' + new Date());
}
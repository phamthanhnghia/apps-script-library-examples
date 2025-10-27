/**
 * @description Logs a simple string message to the Apps Script logger.
 * This is the most basic usage of the Logger service.
 * @see https://developers.google.com/apps-script/reference/base/logger#log(String)
 */
function logSimpleMessage() {
  const message = 'Hello, world! This is a simple log message.';
  
  // The Logger.log() method can be viewed in the Apps Script editor under "Execution log".
  Logger.log(message);
}
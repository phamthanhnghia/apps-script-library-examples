/**
 * @description Clears the entire log.
 * This is useful to ensure that the log only contains messages from the current execution.
 * @see https://developers.google.com/apps-script/reference/base/logger#clear()
 */
function clearLog() {
  Logger.clear();
  console.log('Log has been cleared. This message will now be the first in the log.');
}
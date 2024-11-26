/**
 * List all triggers in the current script project and log them.
 */
function listTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    Logger.log('Trigger ID: ' + trigger.getUniqueId());
    Logger.log('Trigger Type: ' + trigger.getEventType());
    Logger.log('Function to call: ' + trigger.getHandlerFunction());
  }
}
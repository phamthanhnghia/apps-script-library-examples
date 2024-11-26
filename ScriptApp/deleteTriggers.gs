/**
 * Delete all triggers in the current script project.
 */
function deleteTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    ScriptApp.deleteTrigger(trigger);
  }
  Logger.log('All triggers deleted.');
}
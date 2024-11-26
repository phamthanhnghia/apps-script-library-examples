/**
 * Log the remaining daily quota for the script.
 */
function monitorDailyQuota() {
  const quota = ScriptApp.getRemainingDailyQuota();
  Logger.log('Remaining Daily Quota: ' + quota);
}
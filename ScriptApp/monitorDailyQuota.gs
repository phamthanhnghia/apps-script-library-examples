/**
 * @description Logs the remaining daily quotas for various Google services.
 * This is useful for debugging and ensuring your script does not exceed its limits.
 *
 * Quotas are per-user and reset on a 24-hour cycle.
 * @see https://developers.google.com/apps-script/guides/quotas
 */
function checkDailyQuotas() {
  try {
    // Note: Not all services have a specific `getRemainingDailyQuota` method.
    // This demonstrates the ones that do.
    
    const emailQuota = MailApp.getRemainingDailyQuota();
    Logger.log(`Remaining email recipients: ${emailQuota}`);
    
    const contactQuota = ContactsApp.getRemainingDailyQuota();
    Logger.log(`Remaining contacts created: ${contactQuota}`);
    
    const documentQuota = DocumentApp.getRemainingDailyQuota();
    Logger.log(`Remaining documents created: ${documentQuota}`);
    
    const formQuota = FormApp.getRemainingDailyQuota();
    Logger.log(`Remaining forms created: ${formQuota}`);
    
    const mapQuota = Maps.getRemainingDailyQuota();
    Logger.log(`Remaining map tiles rendered: ${mapQuota}`);
    
    const spreadsheetQuota = SpreadsheetApp.getRemainingDailyQuota();
    Logger.log(`Remaining spreadsheets created: ${spreadsheetQuota}`);

    // The generic ScriptApp quota is often less specific.
    const scriptQuota = ScriptApp.getRemainingDailyQuota();
    Logger.log(`Remaining daily script quota (generic): ${scriptQuota}`);

  } catch (e) {
    Logger.log(`An error occurred while checking quotas: ${e.toString()}`);
  }
}

/**
 * @description Demonstrates how to format a Date object into a human-readable string.
 * This is useful for creating consistent timestamps in logs, documents, or emails.
 * @see https://developers.google.com/apps-script/reference/utilities#formatDate(Date,String,String)
 */
function formatTimestamps() {
  const now = new Date();
  
  // Get the script's time zone. This is generally the best practice unless you
  // need to display the time in a specific user's local time zone.
  const timeZone = Session.getScriptTimeZone();

  // Example 1: ISO 8601 format (YYYY-MM-DD HH:mm:ss)
  const isoFormat = Utilities.formatDate(now, timeZone, 'yyyy-MM-dd HH:mm:ss');
  Logger.log(`ISO Format: ${isoFormat}`);

  // Example 2: A more friendly format (e.g., "October 27, 2025 at 10:30 AM")
  const friendlyFormat = Utilities.formatDate(now, timeZone, 'MMMM dd, yyyy \'at\' hh:mm a');
  Logger.log(`Friendly Format: ${friendlyFormat}`);
  
  // Example 3: Formatting for a different time zone (e.g., Pacific Time)
  const pacificTimeZone = 'America/Los_Angeles';
  const pacificTime = Utilities.formatDate(now, pacificTimeZone, 'yyyy-MM-dd hh:mm:ss a Z');
  Logger.log(`Time in ${pacificTimeZone}: ${pacificTime}`);
}
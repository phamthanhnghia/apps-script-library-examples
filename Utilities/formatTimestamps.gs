// Format a date object into a readable string
function formatTimestamps() {
  var date = new Date();
  var formatted = Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  Logger.log("Formatted Timestamp: " + formatted);
}

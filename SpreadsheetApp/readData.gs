// This script reads data from a specific range in the active sheet
function readDataFromRange() {
  // Get the active spreadsheet and its first sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Define the range to read
  var range = sheet.getRange("A1:D5"); // Adjust to your data range
  
  // Get the values in the range
  var values = range.getValues();
  
  // Log each row of data
  values.forEach(function(row) {
    Logger.log(row.join(", "));
  });
}

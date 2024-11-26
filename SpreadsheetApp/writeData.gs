// This script writes a new row of data to the active sheet
function writeDataToSheet() {
  // Get the active spreadsheet and its first sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Define the data to add
  var data = ["John Doe", "john.doe@example.com", "2024-11-26", "Active"];
  
  // Append the data as a new row
  sheet.appendRow(data);
  Logger.log("Data written successfully!");
}

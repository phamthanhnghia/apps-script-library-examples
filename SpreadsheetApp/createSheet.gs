// This script creates a new sheet in the active spreadsheet
function createNewSheet() {
  // Get the active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Name of the new sheet
  var newSheetName = "NewSheet";
  
  // Create the new sheet
  var newSheet = spreadsheet.insertSheet(newSheetName);
  
  // Check if the sheet was created
  if (newSheet) {
    Logger.log("Sheet created: " + newSheet.getName());
  } else {
    Logger.log("Failed to create the sheet. It may already exist.");
  }
}

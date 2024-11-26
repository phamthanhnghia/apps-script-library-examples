// This script formats cells in the active sheet
function formatCells() {
  // Get the active spreadsheet and its first sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Define the range to format
  var range = sheet.getRange("A1:D1");
  
  // Apply formatting
  range.setFontWeight("bold");          // Bold text
  range.setBackground("#FFFF00");      // Yellow background
  range.setFontColor("#FF0000");       // Red font
  range.setHorizontalAlignment("center"); // Center alignment
  
  Logger.log("Cells formatted successfully!");
}

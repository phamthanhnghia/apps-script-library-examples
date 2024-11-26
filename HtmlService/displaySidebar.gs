// This script displays an HTML sidebar in Google Sheets
function showSidebar() {
  var html = HtmlService.createHtmlOutput('<h1>Sidebar Content</h1><p>This is a sidebar.</p>');
  SpreadsheetApp.getUi().showSidebar(html);
}

// This script creates a modal dialog
function showModalDialog() {
  var html = HtmlService.createHtmlOutput('<h1>Modal Dialog</h1><p>This is a modal dialog.</p>');
  SpreadsheetApp.getUi().showModalDialog(html, 'Modal Dialog');
}

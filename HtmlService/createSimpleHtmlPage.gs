// This script creates and displays a simple HTML page in a dialog
function showSimpleHtmlPage() {
  var html = HtmlService.createHtmlOutput('<h1>Hello, World!</h1><p>This is a basic HTML page.</p>')
                        .setWidth(400)
                        .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'Simple HTML Page');
}

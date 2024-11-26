// This script handles button clicks in an HTML interface
function showHtmlWithButton() {
  var html = HtmlService.createHtmlOutputFromFile('ButtonHandler');
  SpreadsheetApp.getUi().showModalDialog(html, 'Button Handler');
}

// Create a file named "ButtonHandler.html" with the following content:
/*
<!DOCTYPE html>
<html>
  <body>
    <button onclick="google.script.run.handleButtonClick()">Click Me</button>
  </body>
</html>
*/

// Create a server-side handler function
function handleButtonClick() {
  Logger.log('Button clicked!');
}

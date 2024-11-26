// This script passes data from Apps Script to an HTML page
function showHtmlWithData() {
  var html = HtmlService.createTemplateFromFile('DataTemplate');
  html.data = { name: 'John Doe', age: 30 }; // Pass data to the template
  SpreadsheetApp.getUi().showModalDialog(html.evaluate(), 'HTML with Data');
}

// Create a file named "DataTemplate.html" with the following content:
/*
<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome, <?= data.name ?>!</h1>
    <p>Your age is <?= data.age ?>.</p>
  </body>
</html>
*/

// This script retrieves data from an HTML page to Apps Script
function showHtmlToGetData() {
  var html = HtmlService.createHtmlOutputFromFile('GetDataForm')
                        .setWidth(400)
                        .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'Get Data from HTML');
}

// Create a file named "GetDataForm.html" with the following content:
/*
<!DOCTYPE html>
<html>
  <body>
    <form onsubmit="google.script.run.processFormData(this); return false;">
      <label>Name:</label>
      <input type="text" name="name" required><br>
      <label>Age:</label>
      <input type="number" name="age" required><br>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
*/

// Create a function to process the data
function processFormData(form) {
  Logger.log('Name: ' + form.name);
  Logger.log('Age: ' + form.age);
}

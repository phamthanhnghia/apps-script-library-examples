// This script serves an HTML page with external CSS and JavaScript
function showHtmlWithExternalResources() {
  var html = HtmlService.createHtmlOutputFromFile('ExternalResources')
                        .setWidth(400)
                        .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'HTML with External Resources');
}

// Create a file named "ExternalResources.html" with the following content:
/*
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <h1 class="text-primary">Styled with Bootstrap</h1>
    <button class="btn btn-success" onclick="sayHello()">Click Me</button>
    <script>
      function sayHello() {
        alert('Hello from JavaScript!');
      }
    </script>
  </body>
</html>
*/

/**
 * @description This script demonstrates how to create a modal dialog in a Google Sheet/Doc/Form
 * and include external CSS (e.g., Bootstrap) and JavaScript (e.g., jQuery) for a more polished UI.
 */

/**
 * Displays a modal dialog with external CSS and JavaScript.
 */
function showStyledModalDialog() {
  // Create an HTML template from the embedded HTML string.
  const htmlTemplate = HtmlService.createTemplate(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <!-- External CSS: Bootstrap from CDN -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <style>
          body { padding: 15px; font-family: sans-serif; }
          .container { margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h3 class="text-primary">Styled Modal Dialog</h3>
          <p>This dialog uses <span class="font-weight-bold">Bootstrap CSS</span> for styling.</p>
          <div class="alert alert-info" role="alert">
            Click the button to see jQuery in action!
          </div>
          <button id="myButton" class="btn btn-success">Click Me</button>
          <button class="btn btn-secondary" onclick="google.script.host.close()">Close Dialog</button>
        </div>

        <!-- External JavaScript: jQuery from CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script>
          // Client-side JavaScript using jQuery
          $(document).ready(function() {
            $('#myButton').click(function() {
              alert('Hello from jQuery! This dialog is styled with Bootstrap.');
            });
          });
        </script>
      </body>
    </html>
    `
  );

  // Evaluate the template to get the final HtmlOutput object.
  const htmlOutput = htmlTemplate.evaluate()
    .setTitle('Styled Dialog')
    .setWidth(500)
    .setHeight(300);

  // Display the modal dialog. This requires the script to be bound to a Google Sheet/Doc/Form.
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Styled Dialog Example');
  // Or DocumentApp.getUi().showModalDialog(htmlOutput, 'Styled Dialog Example');
  // Or FormApp.getUi().showModalDialog(htmlOutput, 'Styled Dialog Example');
}

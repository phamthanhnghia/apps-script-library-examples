/**
 * @description This script demonstrates how to create and serve a simple Google Apps Script Web App.
 * A Web App is a standalone application that can be accessed via a URL.
 * It combines server-side Apps Script code with client-side HTML, CSS, and JavaScript.
 *
 * To deploy this as a Web App:
 * 1. In the Apps Script editor, click "Deploy" -> "New deployment".
 * 2. Select "Web app" as the type.
 * 3. Configure "Execute as:" to "Me" and "Who has access:" to "Anyone" (or as needed).
 * 4. Click "Deploy" and copy the Web App URL.
 */

/**
 * The `doGet()` function is the entry point for a Web App.
 * It returns an `HtmlOutput` object that contains the HTML content to be served.
 * @returns {GoogleAppsScript.HTML.HtmlOutput} The HTML content to display.
 */
function doGet() {
  // Create an HtmlOutput object directly from a string.
  // For more complex HTML, you would use HtmlService.createTemplateFromFile().
  const htmlOutput = HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <style>
          body { font-family: sans-serif; margin: 20px; background-color: #f0f0f0; }
          h1 { color: #4285F4; }
          p { color: #333; }
          .container { background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello from Apps Script Web App!</h1>
          <p>This is a simple web application served directly from Google Apps Script.</p>
          <p>The current time on the server is: <b>${new Date().toLocaleString()}</b></p>
          <p>You can refresh this page to see the time update.</p>
        </div>
      </body>
    </html>
  `);

  // Set the title of the web app page.
  htmlOutput.setTitle('My First Apps Script Web App');
  
  return htmlOutput;
}

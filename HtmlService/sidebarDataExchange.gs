/**
 * @description This script demonstrates how to create an HTML sidebar in a Google Sheet/Doc/Form
 * and enable two-way communication between the client-side HTML/JavaScript and the server-side Apps Script.
 */

/**
 * Displays the HTML sidebar in the active Google Sheet/Doc/Form.
 */
function showDataExchangeSidebar() {
  // Create an HTML template from the embedded HTML string.
  const htmlTemplate = HtmlService.createTemplate(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <style>
          body { font-family: sans-serif; margin: 10px; }
          h3 { color: #4285F4; }
          input[type="text"], input[type="number"] { width: calc(100% - 20px); padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; }
          button { background-color: #4285F4; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; }
          button:hover { background-color: #3367D6; }
          #output { margin-top: 15px; padding: 10px; background-color: #e6e6e6; border-radius: 4px; }
        </style>
      </head>
      <body>
        <h3>Sidebar Data Exchange</h3>
        <p>Server-side data: <span id="serverData">Loading...</span></p>
        <hr>
        <form>
          <label for="nameInput">Name:</label>
          <input type="text" id="nameInput" placeholder="Enter your name">
          <label for="ageInput">Age:</label>
          <input type="number" id="ageInput" placeholder="Enter your age">
          <button type="button" onclick="sendData()">Send to Apps Script</button>
        </form>
        <div id="output"></div>

        <script>
          // Client-side JavaScript
          
          // Function to run when the sidebar loads, to get initial data from Apps Script.
          google.script.run.withSuccessHandler(displayServerData).getInitialData();

          function displayServerData(data) {
            document.getElementById('serverData').innerText = data.message;
          }

          // Function to send data from the HTML form back to Apps Script.
          function sendData() {
            const name = document.getElementById('nameInput').value;
            const age = document.getElementById('ageInput').value;
            
            if (name && age) {
              document.getElementById('output').innerText = 'Sending data...';
              // Call a server-side function and handle the response.
              google.script.run.withSuccessHandler(handleServerResponse).processClientData(name, age);
            } else {
              document.getElementById('output').innerText = 'Please enter both name and age.';
            }
          }

          function handleServerResponse(response) {
            document.getElementById('output').innerText = 'Server response: ' + response;
            document.getElementById('nameInput').value = ''; // Clear form
            document.getElementById('ageInput').value = '';
          }
        </script>
      </body>
    </html>
    `
  );

  // Evaluate the template to get the final HtmlOutput object.
  const htmlOutput = htmlTemplate.evaluate()
    .setTitle('Data Exchange Sidebar')
    .setWidth(300);

  // Display the sidebar. This requires the script to be bound to a Google Sheet/Doc/Form.
  SpreadsheetApp.getUi().showSidebar(htmlOutput);
  // Or DocumentApp.getUi().showSidebar(htmlOutput);
  // Or FormApp.getUi().showSidebar(htmlOutput);
}

/**
 * Server-side function to provide initial data to the client.
 * @returns {object} An object containing a message.
 */
function getInitialData() {
  return { message: `Hello from Apps Script! Current time: ${new Date().toLocaleTimeString()}` };
}

/**
 * Server-side function to process data sent from the client.
 * @param {string} name The name sent from the client.
 * @param {number} age The age sent from the client.
 * @returns {string} A response message to send back to the client.
 */
function processClientData(name, age) {
  Logger.log(`Received from client: Name = ${name}, Age = ${age}`);
  return `Thanks, ${name}! Your age is ${age}. Data processed on server.`;
}

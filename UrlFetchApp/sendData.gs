/**
 * @description Demonstrates how to send data to an API using a POST request with a JSON payload.
 * This example uses httpbin.org, which echoes back the request data.
 */
function sendDataToApi() {
  // httpbin.org/post is a useful endpoint for testing POST requests.
  const apiUrl = 'https://httpbin.org/post';

  const payload = {
    'reportName': 'Weekly Sales',
    'generatedBy': 'Apps Script',
    'data': {
      'items': 105,
      'revenue': 4500.75
    }
  };

  const options = {
    'method': 'post',
    'contentType': 'application/json',
    // The payload must be stringified for the request.
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true
  };

  try {
    const response = UrlFetchApp.fetch(apiUrl, options);
    const responseCode = response.getResponseCode();
    const content = response.getContentText();
    
    Logger.log(`Response Code: ${responseCode}`);

    if (responseCode === 200) {
      Logger.log('Successfully sent data. API responded:');
      // Parse the response from httpbin and log the 'json' field to verify our payload was received.
      const responseData = JSON.parse(content);
      Logger.log(responseData.json);
    } else {
      Logger.log(`API call failed with response code ${responseCode}. Response: ${content}`);
    }
  } catch (e) {
    Logger.log(`An error occurred while sending data: ${e.toString()}`);
  }
}
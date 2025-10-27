/**
 * @description Demonstrates how to fetch and parse JSON data from a public API using a GET request.
 * This example uses JSONPlaceholder, a free fake online REST API.
 * @see https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app
 */
function fetchDataFromApi() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  
  // It's best practice to include muteHttpExceptions to handle potential errors gracefully.
  const options = {
    'method': 'get',
    'muteHttpExceptions': true
  };

  try {
    const response = UrlFetchApp.fetch(apiUrl, options);
    const responseCode = response.getResponseCode();
    const content = response.getContentText();
    
    Logger.log(`Response Code: ${responseCode}`);

    if (responseCode === 200) {
      const data = JSON.parse(content);
      Logger.log('Successfully fetched and parsed data:');
      Logger.log(`- User ID: ${data.userId}`);
      Logger.log(`- Title: ${data.title}`);
      Logger.log(`- Completed: ${data.completed}`);
    } else {
      Logger.log(`API call failed with response code ${responseCode}. Response: ${content}`);
    }
  } catch (e) {
    Logger.log(`An error occurred while fetching data: ${e.toString()}`);
  }
}
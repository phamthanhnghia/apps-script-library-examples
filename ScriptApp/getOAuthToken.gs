/**
 * @description Retrieves the script's OAuth 2.0 access token.
 * This token can be used to make authorized calls to Google APIs using UrlFetchApp.
 *
 * IMPORTANT:
 * - The token is specific to the user running the script and the script itself.
 * - It automatically includes the necessary OAuth scopes that your script has been granted.
 * - Do NOT log this token in production scripts, as it provides access to the user's data.
 *   This example logs it for demonstration purposes only.
 *
 * @see https://developers.google.com/apps-script/reference/script/script-app#getOAuthToken()
 */
function demonstrateGetOAuthToken() {
  try {
    const token = ScriptApp.getOAuthToken();
    
    // For demonstration, we log the first and last few characters of the token.
    Logger.log('Successfully retrieved OAuth token.');
    Logger.log(`Token starts with: ${token.substring(0, 10)}...`);
    Logger.log(`Token ends with: ...${token.substring(token.length - 10)}`);

    // Example of how to use the token with UrlFetchApp to call a Google API
    // This example calls the Drive API to list files.
    const apiUrl = 'https://www.googleapis.com/drive/v3/files?pageSize=10';
    const options = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      muteHttpExceptions: true // Prevents script from stopping on HTTP errors
    };
    
    const response = UrlFetchApp.fetch(apiUrl, options);
    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();
    
    Logger.log(`\n--- Example API Call ---`);
    Logger.log(`Response Code: ${responseCode}`);
    if (responseCode === 200) {
      const files = JSON.parse(responseBody).files;
      Logger.log(`Successfully fetched ${files.length} files from Google Drive API.`);
      files.forEach(file => Logger.log(`- ${file.name}`));
    } else {
      Logger.log(`API call failed. Response: ${responseBody}`);
    }

  } catch (e) {
    Logger.log(`An error occurred: ${e.toString()}`);
  }
}
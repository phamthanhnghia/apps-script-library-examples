// This script securely stores and retrieves an API key
function storeAndRetrieveApiKey() {
  var scriptProperties = PropertiesService.getScriptProperties();
  
  // Store the API key
  scriptProperties.setProperty('API_KEY', 'your-api-key-here');
  
  // Retrieve the API key
  var apiKey = scriptProperties.getProperty('API_KEY');
  Logger.log('Retrieved API Key: %s', apiKey);
}

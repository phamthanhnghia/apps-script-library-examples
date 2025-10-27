/**
 * @description This script provides a comprehensive demonstration of the PropertiesService,
 * which is used to store simple string data in key-value pairs scoped to a script, a user, or a document.
 */
function demonstratePropertiesService() {
  Logger.log('--- Starting PropertiesService Demonstration ---');

  // --- 1. Script Properties ---
  // Scoped to the script. All users of the script share these properties.
  // Useful for script-wide configuration or settings.
  Logger.log('\n--- Demonstrating Script Properties ---');
  const scriptProperties = PropertiesService.getScriptProperties();
  
  // Example: Storing an API Key (for non-sensitive data)
  // WARNING: Properties are not encrypted and should not be used for secrets like passwords.
  // They are suitable for API keys that are not highly sensitive.
  scriptProperties.setProperty('API_KEY', '123-abc-789-xyz');
  scriptProperties.setProperty('APP_VERSION', '1.2.0');
  
  Logger.log('All Script Properties:');
  logProperties(scriptProperties);
  
  const apiKey = scriptProperties.getProperty('API_KEY');
  Logger.log(`Retrieved API Key: ${apiKey}`);
  
  scriptProperties.deleteProperty('APP_VERSION');
  Logger.log('Deleted "APP_VERSION". Remaining properties:');
  logProperties(scriptProperties);
  
  scriptProperties.deleteAllProperties();
  Logger.log('Deleted all script properties.');

  // --- 2. User Properties ---
  // Scoped to the current user. Each user has their own set of properties.
  // Useful for storing user-specific settings or preferences.
  Logger.log('\n--- Demonstrating User Properties ---');
  const userProperties = PropertiesService.getUserProperties();
  
  userProperties.setProperty('theme', 'dark');
  userProperties.setProperty('language', 'en-US');
  
  Logger.log('All User Properties:');
  logProperties(userProperties);
  
  const theme = userProperties.getProperty('theme');
  Logger.log(`Retrieved user theme: ${theme}`);
  
  userProperties.deleteAllProperties();
  Logger.log('Deleted all user properties.');

  // --- 3. Document Properties ---
  // Scoped to the specific document, spreadsheet, or presentation containing the script.
  // Useful for storing metadata about the file.
  Logger.log('\n--- Demonstrating Document Properties ---');
  // Document properties require a container document. Let's check if we are in one.
  const containerDoc = SpreadsheetApp.getActiveSpreadsheet() || DocumentApp.getActiveDocument();
  if (containerDoc) {
    const documentProperties = PropertiesService.getDocumentProperties();
    documentProperties.setProperty('lastUpdatedBy', Session.getActiveUser().getEmail());
    documentProperties.setProperty('docVersion', '3');
    
    Logger.log('All Document Properties:');
    logProperties(documentProperties);
    
    const docVersion = documentProperties.getProperty('docVersion');
    Logger.log(`Retrieved document version: ${docVersion}`);
    
    documentProperties.deleteAllProperties();
    Logger.log('Deleted all document properties.');
  } else {
    Logger.log('This script is not bound to a document, so Document Properties cannot be demonstrated.');
  }

  Logger.log('\n--- Demonstration Complete ---');
}

/**
 * Helper function to log all key-value pairs from a given Properties store.
 * @param {GoogleAppsScript.Properties.Properties} properties The property store to log.
 */
function logProperties(properties) {
  const allProps = properties.getProperties();
  const keys = Object.keys(allProps);
  if (keys.length === 0) {
    Logger.log('(No properties found)');
  } else {
    for (const key of keys) {
      Logger.log(`- ${key}: ${allProps[key]}`);
    }
  }
}

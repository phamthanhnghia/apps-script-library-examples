// This script sets and retrieves a user-level property
function setAndGetUserProperty() {
  var userProperties = PropertiesService.getUserProperties();
  
  // Set a user-specific property
  userProperties.setProperty('theme', 'dark');
  
  // Get the property
  var theme = userProperties.getProperty('theme');
  Logger.log('User Property - theme: %s', theme);
}

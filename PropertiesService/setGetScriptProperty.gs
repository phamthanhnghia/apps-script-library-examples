// This script sets and retrieves a script-level property
function setAndGetScriptProperty() {
  var scriptProperties = PropertiesService.getScriptProperties();
  
  // Set a property
  scriptProperties.setProperty('appName', 'MyApp');
  
  // Get the property
  var appName = scriptProperties.getProperty('appName');
  Logger.log('Script Property - appName: %s', appName);
}

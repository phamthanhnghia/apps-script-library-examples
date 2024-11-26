// This script logs all properties in a specific property store
function logAllProperties() {
  var scriptProperties = PropertiesService.getScriptProperties();
  
  // Get all properties
  var allProperties = scriptProperties.getProperties();
  
  // Log each property
  for (var key in allProperties) {
    Logger.log('%s: %s', key, allProperties[key]);
  }
}

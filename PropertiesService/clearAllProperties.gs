// This script clears all properties in a specific property store
function clearAllProperties() {
  var userProperties = PropertiesService.getUserProperties();
  
  // Clear all user properties
  userProperties.deleteAllProperties();
  Logger.log('All user properties cleared.');
}

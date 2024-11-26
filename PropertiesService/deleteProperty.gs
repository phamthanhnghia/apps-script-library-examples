// This script deletes a specific property
function deleteProperty() {
  var scriptProperties = PropertiesService.getScriptProperties();
  
  // Delete a property
  scriptProperties.deleteProperty('appName');
  Logger.log('Script Property "appName" deleted.');
}

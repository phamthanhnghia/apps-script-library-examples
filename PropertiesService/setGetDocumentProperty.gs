// This script sets and retrieves a document-level property
function setAndGetDocumentProperty() {
  var documentProperties = PropertiesService.getDocumentProperties();
  
  // Set a property specific to this document
  documentProperties.setProperty('lastUpdated', new Date().toISOString());
  
  // Get the property
  var lastUpdated = documentProperties.getProperty('lastUpdated');
  Logger.log('Document Property - lastUpdated: %s', lastUpdated);
}

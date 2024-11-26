// This script creates a new Google Doc and appends a paragraph
function createDocument() {
  // Create a new Google Doc
  var doc = DocumentApp.create('My New Document');
  
  // Append a paragraph to the document
  doc.getBody().appendParagraph('Hello, world!');
  
  // Log the URL of the created document
  Logger.log('Document created! URL: ' + doc.getUrl());
}

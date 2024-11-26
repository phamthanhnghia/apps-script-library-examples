/**
 * Remove all content from a Google Document.
 */
function deleteContent() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const body = doc.getBody();
  
  body.clear(); // Remove all content
  Logger.log('All content deleted from document.');
}
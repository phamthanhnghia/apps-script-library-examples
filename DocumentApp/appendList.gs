/**
 * Append a bulleted list to a Google Document.
 */
function appendList() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const body = doc.getBody();
  
  body.appendListItem('First item');
  body.appendListItem('Second item');
  Logger.log('List appended to document.');
}
/**
 * Find and replace specific text in a Google Document.
 */
function findAndReplaceText() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const body = doc.getBody();
  
  body.replaceText('old text', 'new text');
  Logger.log('Text replaced in document.');
}
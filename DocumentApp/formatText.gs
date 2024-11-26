/**
 * Apply formatting such as bold, italics, or colors to specific text.
 */
function formatText() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const body = doc.getBody();
  
  const text = body.appendParagraph('This text will be formatted.');
  text.setBold(true);
  text.setItalic(true);
  text.setForegroundColor('#FF0000'); // Set text color to red
  Logger.log('Text formatted in document.');
}
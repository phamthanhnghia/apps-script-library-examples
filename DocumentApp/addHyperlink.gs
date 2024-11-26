/**
 * Add a clickable hyperlink to a Google Document.
 */
function addHyperlink() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const body = doc.getBody();
  
  const text = body.appendParagraph('Visit OpenAI');
  text.setLinkUrl('https://www.openai.com');
  Logger.log('Hyperlink added to document.');
}
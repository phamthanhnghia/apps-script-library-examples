/**
 * Insert headers and footers with custom content into a Google Document.
 */
function insertHeadersAndFooters() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const header = doc.addHeader();
  const footer = doc.addFooter();
  
  header.appendParagraph('This is the header content.');
  footer.appendParagraph('This is the footer content.');
  Logger.log('Headers and footers added to document.');
}
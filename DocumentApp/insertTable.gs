/**
 * Insert a table into a Google Document with predefined data.
 */
function insertTable() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const body = doc.getBody();
  
  const data = [
    ['Header 1', 'Header 2'],
    ['Row 1 Col 1', 'Row 1 Col 2'],
    ['Row 2 Col 1', 'Row 2 Col 2']
  ];

  const table = body.appendTable(data);
  Logger.log('Table inserted.');
}
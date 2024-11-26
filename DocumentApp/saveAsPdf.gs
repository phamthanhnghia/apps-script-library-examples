/**
 * Save a Google Document as a PDF and save it to Google Drive.
 */
function saveAsPdf() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const pdfBlob = DriveApp.getFileById(doc.getId()).getAs('application/pdf');
  
  const folder = DriveApp.getFolderById('YOUR_FOLDER_ID'); // Replace with your target folder ID
  folder.createFile(pdfBlob).setName(doc.getName() + '.pdf');
  Logger.log('Document saved as PDF in specified folder.');
}
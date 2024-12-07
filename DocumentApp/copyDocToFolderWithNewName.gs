function copyDocToFolderWithNewName() {
  const docId = 'YOUR_DOCUMENT_ID'; // ID of the original document
  const folderId = 'YOUR_FOLDER_ID'; // ID of the destination folder
  const newName = 'New Document Name'; // New name for the copied document
  
  // Open the original document
  const file = DriveApp.getFileById(docId);
  
  // Copy the document to the destination folder
  const folder = DriveApp.getFolderById(folderId);
  const copiedFile = file.makeCopy(newName, folder);
  
  Logger.log(`Document successfully copied with name: ${newName}`);
  Logger.log(`ID of the new document: ${copiedFile.getId()}`);
}

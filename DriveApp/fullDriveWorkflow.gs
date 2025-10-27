/**
 * @description This script demonstrates a complete, end-to-end workflow for managing files and folders in Google Drive.
 * It programmatically creates folders and files, lists them, moves them, and provides cleanup instructions.
 * This is a practical example of how to automate file management tasks.
 */
function fullDriveWorkflow() {
  try {
    // --- 1. Create a Parent Folder ---
    const parentFolderName = `Drive Workflow Demo - ${new Date().getTime()}`;
    const parentFolder = DriveApp.createFolder(parentFolderName);
    Logger.log(`Successfully created parent folder: "${parentFolder.getName()}"`);
    Logger.log(`Parent Folder URL: ${parentFolder.getUrl()}`);

    // --- 2. Create Subfolders and Files ---
    const subfolder = parentFolder.createFolder('Receipts');
    Logger.log(`Created subfolder: "${subfolder.getName()}"`);

    const fileContent = 'This is a sample file created by an Apps Script.';
    const fileName = 'sample-document.txt';
    const file = parentFolder.createFile(fileName, fileContent, 'text/plain');
    Logger.log(`Created sample file: "${file.getName()}"`);

    // --- 3. List Contents of the Parent Folder ---
    Logger.log(`\n--- Contents of '${parentFolder.getName()}' ---`);
    const folders = parentFolder.getFolders();
    while (folders.hasNext()) {
      let folder = folders.next();
      Logger.log(`Folder: ${folder.getName()}`);
    }
    const files = parentFolder.getFiles();
    while (files.hasNext()) {
      let f = files.next();
      Logger.log(`File: ${f.getName()}`);
    }
    Logger.log('------------------------------------');

    // --- 4. Move the File ---
    Logger.log(`\nMoving '${file.getName()}' into '${subfolder.getName()}'...`);
    file.moveTo(subfolder);
    Logger.log('Move complete.');

    // --- 5. Verify the Move ---
    Logger.log(`\n--- Contents of '${subfolder.getName()}' ---`);
    const subfolderFiles = subfolder.getFiles();
    while (subfolderFiles.hasNext()) {
      let f = subfolderFiles.next();
      Logger.log(`File: ${f.getName()}`);
    }
    // Check if the file exists in the original location (it shouldn't)
    const oldLocationFiles = parentFolder.getFilesByName(fileName);
    if (!oldLocationFiles.hasNext()) {
        Logger.log(`Verified: '${fileName}' is no longer in the parent folder.`);
    }
    Logger.log('------------------------------------');

    // --- 6. Cleanup Instructions ---
    Logger.log(`\nWorkflow complete. To clean up, delete the folder "${parentFolderName}" from your Google Drive.`);
    // For automatic cleanup, you could use:
    // parentFolder.setTrashed(true);

  } catch (e) {
    Logger.log(`An error occurred during the workflow: ${e.toString()}`);
    Logger.log(`Stack: ${e.stack}`);
  }
}

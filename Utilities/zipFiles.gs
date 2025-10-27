/**
 * @description Demonstrates how to create a zip archive from a collection of files (blobs)
 * and how to unzip an existing archive.
 * @see https://developers.google.com/apps-script/reference/utilities#zip(BlobSource[],String)
 * @see https://developers.google.com/apps-script/reference/utilities#unzip(Blob)
 */
function demonstrateZippingAndUnzipping() {
  try {
    // --- Setup: Create a temporary folder and some sample files to zip ---
    const tempFolderName = `ZipDemo_${new Date().getTime()}`;
    const tempFolder = DriveApp.createFolder(tempFolderName);
    
    const file1 = tempFolder.createFile('file1.txt', 'This is the first file.');
    const file2 = tempFolder.createFile('file2.html', '<html><body><h1>Hello</h1></body></html>');
    const file3 = tempFolder.createFile('data.json', '{"id": 123, "data": "sample"}');

    Logger.log(`Created temporary folder: ${tempFolder.getName()}`);

    // --- Zipping ---
    // We need to provide the files as an array of blobs.
    const filesToZip = [file1.getBlob(), file2.getBlob(), file3.getBlob()];
    const zipFileName = 'archive.zip';
    const zipBlob = Utilities.zip(filesToZip, zipFileName);

    // Save the zip file to Google Drive.
    const zipFile = tempFolder.createFile(zipBlob);
    Logger.log(`Successfully created zip file: ${zipFile.getUrl()}`);

    // --- Unzipping ---
    const unzippedBlobs = Utilities.unzip(zipBlob);
    
    Logger.log(`Unzipped archive contains ${unzippedBlobs.length} files:`);
    
    unzippedBlobs.forEach(blob => {
      // Save the unzipped files back to the folder to verify.
      const unzippedFile = tempFolder.createFile(blob);
      Logger.log(`  - Restored: ${unzippedFile.getName()} (${unzippedFile.getSize()} bytes)`);
      Logger.log(`    Content: "${unzippedFile.getBlob().getDataAsString().substring(0, 50)}..."`);
    });

    // --- Cleanup ---
    // To keep the user's Drive clean, you can delete the temporary folder.
    // For this example, we will leave it for inspection.
    Logger.log(`Cleanup: To delete the demo folder, manually remove "${tempFolderName}" from your Google Drive.`);
    // tempFolder.setTrashed(true); // Uncomment to enable automatic cleanup.

  } catch (e) {
    Logger.log(`An error occurred: ${e.toString()}`);
    Logger.log(`Stack: ${e.stack}`);
  }
}
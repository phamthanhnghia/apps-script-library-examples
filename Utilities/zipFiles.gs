// Zip multiple files into one archive
function zipFiles() {
  var folder = DriveApp.getFolderById("your-folder-id"); // Replace with your folder ID
  var files = folder.getFiles();
  var zipBlob = Utilities.zip(files, "Archive.zip");
  
  var driveFile = DriveApp.createFile(zipBlob);
  Logger.log("Zip file created: " + driveFile.getUrl());
}

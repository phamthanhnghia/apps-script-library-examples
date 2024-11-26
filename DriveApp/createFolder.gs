// This script creates a new folder in Google Drive
function createFolder() {
  var folderName = "New Folder";
  var folder = DriveApp.createFolder(folderName);
  Logger.log("Folder created: " + folder.getUrl());
}

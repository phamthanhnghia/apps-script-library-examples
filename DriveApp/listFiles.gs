// This script lists all files in a specific folder
function listFilesInFolder() {
  var folderId = "your-folder-id";
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  
  while (files.hasNext()) {
    var file = files.next();
    Logger.log("File: " + file.getName() + ", URL: " + file.getUrl());
  }
}

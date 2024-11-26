// This script moves a file to a specified folder
function moveFileToFolder() {
  var fileId = "your-file-id";
  var targetFolderId = "your-target-folder-id";
  
  var file = DriveApp.getFileById(fileId);
  var targetFolder = DriveApp.getFolderById(targetFolderId);
  
  file.moveTo(targetFolder);
  Logger.log("File moved to: " + targetFolder.getName());
}

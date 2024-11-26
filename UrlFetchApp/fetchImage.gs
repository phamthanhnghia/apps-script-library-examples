// This script fetches an image from a URL and saves it to Google Drive
function fetchImage() {
  var imageUrl = "https://via.placeholder.com/150"; // Example image URL
  var response = UrlFetchApp.fetch(imageUrl);
  var blob = response.getBlob();
  
  var file = DriveApp.createFile(blob);
  Logger.log("Image saved to Drive: " + file.getUrl());
}

/**
 * @description Demonstrates how to fetch a binary file (like an image) from a URL
 * and save it to Google Drive.
 */
function fetchImageAndSaveToDrive() {
  // Using a reliable placeholder image service
  const imageUrl = 'https://via.placeholder.com/300/4a86e8/ffffff?text=Apps+Script';
  const folderName = 'Fetched Images';

  try {
    // --- 1. Fetch the image from the URL ---
    const response = UrlFetchApp.fetch(imageUrl);
    const imageBlob = response.getBlob();
    // Set a specific name for the image file
    imageBlob.setName(`FetchedImage_${new Date().getTime()}.png`);
    Logger.log(`Successfully fetched image: "${imageBlob.getName()}"`);

    // --- 2. Find or create the destination folder in Google Drive ---
    let folder;
    const folders = DriveApp.getFoldersByName(folderName);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
      Logger.log(`Created new folder in Drive: "${folderName}"`);
    }

    // --- 3. Save the image blob to the folder ---
    const file = folder.createFile(imageBlob);
    Logger.log(`Image saved to Drive. URL: ${file.getUrl()}`);

  } catch (e) {
    Logger.log(`An error occurred: ${e.toString()}`);
  }
}
/**
 * Add an image to an existing Google Document.
 */
function addImage() {
  const doc = DocumentApp.openById('YOUR_DOCUMENT_ID'); // Replace with your Google Doc ID
  const body = doc.getBody();
  
  const imageUrl = 'https://example.com/image.png'; // Replace with your image URL
  const response = UrlFetchApp.fetch(imageUrl);
  const image = response.getBlob();

  body.appendImage(image);
  Logger.log('Image added to document.');
}
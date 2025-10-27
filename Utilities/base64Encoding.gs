/**
 * @description Demonstrates how to encode and decode strings using Base64 and Web-Safe Base64.
 * The Utilities service provides methods for these common encoding tasks.
 * @see https://developers.google.com/apps-script/reference/utilities/base-64-codec
 */
function demonstrateBase64Encoding() {
  const originalString = "Hello, Google Apps Script! This string has spaces and+symbols.";

  // --- Standard Base64 Encoding ---
  
  // Encode the string into a Base64-encoded string.
  const encodedString = Utilities.base64Encode(originalString, Utilities.Charset.UTF_8);
  Logger.log(`Original: ${originalString}`);
  Logger.log(`Standard Base64 Encoded: ${encodedString}`);

  // Decode the Base64 string back to a byte array.
  const decodedBytes = Utilities.base64Decode(encodedString, Utilities.Charset.UTF_8);
  
  // Convert the byte array back to a string to verify.
  const decodedString = Utilities.newBlob(decodedBytes).getDataAsString();
  Logger.log(`Decoded: ${decodedString}`);
  Logger.log('---');


  // --- Web-Safe Base64 Encoding ---
  // This variant is safe to use in URLs and filenames.
  
  const webSafeEncoded = Utilities.base64EncodeWebSafe(originalString);
  Logger.log(`Web-Safe Base64 Encoded: ${webSafeEncoded}`);
  
  const webSafeDecodedBytes = Utilities.base64DecodeWebSafe(webSafeEncoded);
  const webSafeDecodedString = Utilities.newBlob(webSafeDecodedBytes).getDataAsString();
  Logger.log(`Web-Safe Decoded: ${webSafeDecodedString}`);
}
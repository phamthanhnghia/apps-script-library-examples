// Encode and decode a string to/from Base64
function base64Encoding() {
  var originalString = "Hello, Google Apps Script!";
  var encoded = Utilities.base64Encode(originalString);
  var decoded = Utilities.base64Decode(encoded, Utilities.Charset.UTF_8);
  
  Logger.log("Original: " + originalString);
  Logger.log("Encoded: " + encoded);
  Logger.log("Decoded: " + Utilities.newBlob(decoded).getDataAsString());
}

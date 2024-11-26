// Create a MIME-encoded email
function createMimeEmail() {
  var mimeMessage = Utilities.newBlob("This is a test email.").getBytes();
  var encoded = Utilities.base64EncodeWebSafe(mimeMessage);
  Logger.log("MIME-encoded message: " + encoded);
}

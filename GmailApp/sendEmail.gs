// This script sends an email using Gmail
function sendEmail() {
  var recipient = "example@example.com";
  var subject = "Test Email";
  var body = "Hello! This is a test email sent via GmailApp.";
  
  GmailApp.sendEmail(recipient, subject, body);
  Logger.log("Email sent to: " + recipient);
}

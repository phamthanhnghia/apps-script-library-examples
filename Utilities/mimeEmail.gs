/**
 * @description This script demonstrates a practical application of MIME principles in Apps Script
 * by sending a multipart email using GmailApp.
 *
 * IMPORTANT: Manually constructing a MIME message with `Utilities.newBlob` is complex and
 * rarely necessary. The `GmailApp` service automatically handles the MIME encoding
 * when you provide options like `htmlBody` or `attachments`. This example shows the
 * recommended, practical way to send rich emails.
 *
 * @see https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)
 */
function sendMultipartEmail() {
  const recipient = Session.getActiveUser().getEmail();
  const subject = 'Demonstration of a Multipart (MIME) Email';
  
  // The plain text body, for email clients that don't support HTML.
  const textBody = 'This is the plain text version of the email. ' +
                   'If you are seeing this, your email client does not support HTML.';

  // The HTML body, for modern email clients.
  const htmlBody = `
    <html>
      <body>
        <h1>Hello from Apps Script!</h1>
        <p>This is the <b>HTML version</b> of the email.</p>
        <p>It supports formatting like <font color="blue">colors</font> and <b>bold text</b>.</p>
        <p>The GmailApp service automatically packages this into a multipart/alternative MIME message.</p>
      </body>
    </html>
  `;

  // By providing both `body` (for plain text) and `htmlBody`, GmailApp creates
  // a multipart/alternative message, which is a core concept of MIME.
  const options = {
    body: textBody,
    htmlBody: htmlBody,
    name: 'Apps Script Demo' // Optional: The name that appears as the sender
  };

  try {
    GmailApp.sendEmail(recipient, subject, textBody, options);
    Logger.log(`Successfully sent multipart email to ${recipient}`);
  } catch (e) {
    Logger.log(`Failed to send email. Error: ${e.toString()}`);
  }
}
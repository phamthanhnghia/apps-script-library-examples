/**
 * @description Demonstrates how to send a simple and an advanced email using GmailApp.
 * @see https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object)
 */

/**
 * Sends a basic plain-text email.
 */
function sendSimpleEmail() {
  // Get the recipient's email address. For this example, we'll use the active user's email.
  const recipient = Session.getActiveUser().getEmail();
  const subject = 'Simple Email from Apps Script';
  const body = 'This is a plain-text email sent using GmailApp.';

  try {
    GmailApp.sendEmail(recipient, subject, body);
    Logger.log(`Successfully sent a simple email to ${recipient}`);
  } catch (e) {
    Logger.log(`Failed to send simple email. Error: ${e.toString()}`);
  }
}


/**
 * Sends a more advanced email with HTML content, a custom sender name, and CC/BCC.
 */
function sendAdvancedEmail() {
  const recipient = Session.getActiveUser().getEmail();
  const subject = 'Advanced HTML Email from Apps Script';
  
  // Plain text body for clients that don't support HTML
  const textBody = 'This email contains HTML content. Please use an HTML-enabled client to view it.';

  // HTML body for rich formatting
  const htmlBody = `
    <html>
      <body>
        <h1>Report Ready</h1>
        <p>Hello,</p>
        <p>Your weekly report is ready. You can view it <a href="https://www.google.com">here</a>.</p>
        <p>This email was sent automatically via Google Apps Script.</p>
      </body>
    </html>
  `;

  const options = {
    cc: 'cc.recipient@example.com',
    bcc: 'bcc.recipient@example.com',
    htmlBody: htmlBody,
    name: 'Automated Reporter' // Custom sender name
  };

  try {
    // Note: The 'body' parameter in sendEmail is still required, even with htmlBody.
    // It serves as the plain-text alternative.
    GmailApp.sendEmail(recipient, subject, textBody, options);
    Logger.log(`Successfully sent an advanced email to ${recipient}`);
  } catch (e) {
    Logger.log(`Failed to send advanced email. Error: ${e.toString()}`);
  }
}
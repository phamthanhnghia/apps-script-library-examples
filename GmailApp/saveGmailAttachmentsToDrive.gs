/**
 * @description A practical workflow that searches for Gmail messages with attachments,
 * saves those attachments to a specific Google Drive folder, and marks the email as read.
 *
 * This demonstrates a powerful integration between GmailApp and DriveApp.
 */
function saveGmailAttachmentsToDrive() {
  // --- Configuration ---
  // The search query to find the emails.
  // Examples:
  // 'has:attachment is:unread from:invoices@company.com'
  // 'has:attachment subject:(Weekly Report)'
  const searchQuery = 'has:attachment is:unread';
  
  // The name of the Drive folder where attachments will be saved.
  const driveFolderName = 'Gmail Attachments';
  // --- End of Configuration ---

  try {
    // --- 1. Find or Create the Google Drive Folder ---
    let folder;
    const folders = DriveApp.getFoldersByName(driveFolderName);
    
    if (folders.hasNext()) {
      // Use the first folder found
      folder = folders.next();
      Logger.log(`Using existing Drive folder: "${folder.getName()}"`);
    } else {
      // Create the folder if it doesn't exist
      folder = DriveApp.createFolder(driveFolderName);
      Logger.log(`Created new Drive folder: "${folder.getName()}"`);
    }
    Logger.log(`Drive Folder URL: ${folder.getUrl()}`);

    // --- 2. Search for Matching Gmail Threads ---
    const threads = GmailApp.search(searchQuery);
    if (threads.length === 0) {
      Logger.log('No matching emails with attachments found.');
      return;
    }
    Logger.log(`Found ${threads.length} email thread(s) with attachments.`);

    // --- 3. Process Each Thread ---
    for (const thread of threads) {
      const subject = thread.getFirstMessageSubject();
      Logger.log(`Processing thread: "${subject}"`);
      
      const messages = thread.getMessages();
      for (const message of messages) {
        // Process only unread messages that have attachments
        if (message.isUnread()) {
          const attachments = message.getAttachments();
          
          for (const attachment of attachments) {
            // Save the attachment to the Drive folder
            const file = folder.createFile(attachment);
            Logger.log(`  - Saved attachment: "${file.getName()}" to "${folder.getName()}"`);
          }
        }
      }
      
      // Mark the entire thread as read once all messages/attachments are processed.
      thread.markRead();
      Logger.log(`Marked thread "${subject}" as read.`);
    }
    
    Logger.log('--- Workflow complete. All attachments have been saved. ---');

  } catch (e) {
    Logger.log(`An error occurred: ${e.toString()}`);
    Logger.log(`Stack: ${e.stack}`);
  }
}

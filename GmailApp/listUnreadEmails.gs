/**
 * @description Demonstrates how to retrieve and process unread emails from the inbox.
 * This script iterates through recent unread threads and logs key details from each message.
 * @see https://developers.google.com/apps-script/reference/gmail/gmail-app#getInboxThreads(Integer,Integer)
 */
function processUnreadEmails() {
  try {
    // Get the first 10 threads from the inbox.
    // You can adjust these numbers. For example, get 50 threads starting from the beginning: getInboxThreads(0, 50)
    const threads = GmailApp.getInboxThreads(0, 10);

    Logger.log('Processing up to 10 recent inbox threads...');

    for (const thread of threads) {
      // We only care about threads that are marked as unread.
      if (thread.isUnread()) {
        Logger.log(`--- Unread Thread Found: "${thread.getFirstMessageSubject()}" ---`);
        
        // A thread can have multiple messages (e.g., replies). Let's look at each one.
        const messages = thread.getMessages();
        for (const message of messages) {
          // We only want to process messages in the thread that are also unread.
          if (message.isUnread()) {
            Logger.log(`  - From: ${message.getFrom()}`);
            Logger.log(`  - Date: ${message.getDate()}`);
            Logger.log(`  - Subject: ${message.getSubject()}`);
            // Get a short snippet of the body. getPlainBody() returns the full text.
            Logger.log(`  - Snippet: ${message.getPlainBody().substring(0, 100)}...`);
          }
        }
        
        // After processing, you might want to mark the thread as read.
        // thread.markRead();
        // Logger.log('Thread has been marked as read.');
      }
    }
    Logger.log('--- Finished processing threads. ---');

  } catch (e) {
    Logger.log(`An error occurred: ${e.toString()}`);
  }
}
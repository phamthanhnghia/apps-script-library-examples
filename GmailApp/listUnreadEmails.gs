// This script lists all unread emails in the inbox
function listUnreadEmails() {
  var threads = GmailApp.getInboxThreads(0, 10); // Get the latest 10 threads
  threads.forEach(function(thread) {
    if (thread.isUnread()) {
      Logger.log("Thread: " + thread.getFirstMessageSubject());
    }
  });
}

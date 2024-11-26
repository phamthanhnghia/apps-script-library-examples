// This script searches for emails and archives them
function searchAndArchiveEmails() {
  var threads = GmailApp.search("subject:Test Email");
  threads.forEach(function(thread) {
    Logger.log("Archiving thread: " + thread.getFirstMessageSubject());
    thread.moveToArchive();
  });
}

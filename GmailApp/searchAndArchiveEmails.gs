/**
 * @description Demonstrates how to search for specific emails and move them to the archive.
 * Archiving removes emails from the inbox but keeps them in your account, accessible via search or "All Mail".
 * @see https://developers.google.com/apps-script/reference/gmail/gmail-app#search(String)
 * @see https://developers.google.com/apps-script/reference/gmail/gmail-thread#moveToArchive()
 */
function searchAndArchive() {
  // Use the same search operators you use in the Gmail search box.
  // For example, find all unread emails from a specific sender with "report" in the subject.
  const searchQuery = 'is:unread from:some.sender@example.com subject:(report)';

  Logger.log(`Searching for emails with query: "${searchQuery}"`);

  try {
    // The search function returns an array of threads that match the query.
    const threads = GmailApp.search(searchQuery);

    if (threads.length === 0) {
      Logger.log('No matching threads found to archive.');
      return;
    }

    Logger.log(`Found ${threads.length} matching thread(s). Archiving now...`);

    // Iterate through the threads and archive each one.
    for (const thread of threads) {
      const subject = thread.getFirstMessageSubject();
      Logger.log(` - Archiving thread: "${subject}"`);
      thread.moveToArchive();
    }

    Logger.log('Finished archiving threads.');

  } catch (e) {
    Logger.log(`An error occurred during search and archive: ${e.toString()}`);
  }
}
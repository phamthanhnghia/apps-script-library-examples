# GmailApp Examples & Workflows

## Overview

The `GmailApp` service provides extensive capabilities to interact with your Gmail account. You can read, process, and send emails, enabling powerful communication and workflow automation directly from Apps Script.

The examples in this directory have been enhanced to demonstrate modern, practical applications of the `GmailApp` service, including a powerful new workflow that integrates with Google Drive.

---

## Enhanced Scripts

### 1. `sendEmail.gs`
This script now contains two functions:
-   `sendSimpleEmail()`: A basic example of sending a plain-text email.
-   `sendAdvancedEmail()`: Demonstrates sending a rich HTML email with options like `cc`, `bcc`, and a custom sender name (`name`).

### 2. `listUnreadEmails.gs`
This script was improved to show how to properly process unread threads. It now iterates through the messages within a thread and logs detailed information like the sender, date, subject, and a snippet of the message body.

### 3. `searchAndArchiveEmails.gs`
This example was made more robust, showing how to use a more complex search query to find specific emails and archive them. It includes better logging and error handling.

---

## New Workflow: `saveGmailAttachmentsToDrive.gs`

This is a new, highly practical script that demonstrates a common automation task:

1.  **Searches for Emails**: It searches for unread emails that have attachments, based on a configurable search query.
2.  **Manages Drive Folder**: It finds a specific folder in your Google Drive or creates it if it doesn't exist.
3.  **Saves Attachments**: It iterates through all found emails, gets every attachment, and saves a copy of it to the designated Drive folder.
4.  **Marks as Read**: After successfully processing a thread and saving its attachments, it marks the email thread as read to avoid processing it again.

This workflow is a powerful example of combining multiple Google services (`GmailApp` and `DriveApp`) to create a useful automation.
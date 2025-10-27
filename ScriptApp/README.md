# ScriptApp & Trigger Management

## Overview

The `ScriptApp` service is a powerful tool for managing the script project itself. Its primary uses include programmatically creating and managing triggers, handling OAuth tokens for API calls, and monitoring service quotas.

This directory has been refactored to provide clear, robust examples for each of these functions. The multiple trigger-related scripts have been consolidated into a single, comprehensive `triggerManagement.gs` file.

---

## `triggerManagement.gs`

This script is a complete guide to managing triggers. It includes functions to:
-   **Create Triggers**: Demonstrates creating time-based triggers (e.g., every 5 minutes, or at a specific future time) and event-driven triggers (e.g., `onEdit` for a Google Sheet).
-   **List All Triggers**: A utility function to log every trigger currently active in the project.
-   **Delete Triggers**: Includes a targeted function to delete triggers by their handler name (e.g., delete all triggers for `myFunction`), and a "delete all" function for complete cleanup.

## `getOAuthToken.gs`

This script has been enhanced to provide a much clearer explanation of `ScriptApp.getOAuthToken()`. It now:
-   Explains what the OAuth token is and its security implications.
-   Demonstrates how to safely log the token for debugging.
-   Includes a practical example of using the token with `UrlFetchApp` to make an authorized call to the Google Drive API.

## `monitorDailyQuota.gs`

This script was improved to show how to check the remaining daily quota for multiple Google services (`MailApp`, `ContactsApp`, `DocumentApp`, etc.), not just the generic `ScriptApp` quota. This provides a more useful and complete picture for monitoring script execution limits.
# CalendarApp Workflow: Event Management

## Overview

The `CalendarApp` service allows you to create and manage events in Google Calendar, enabling powerful scheduling automation.

This directory has been refactored to use a single, comprehensive workflow script. This new `eventManagementWorkflow.gs` script replaces the previous basic examples, providing a more practical and self-contained demonstration.

---

## `eventManagementWorkflow.gs`

This script is a runnable, end-to-end workflow that demonstrates how to manage calendar events without affecting your primary calendar. It performs the following actions:

1.  **Creates a Calendar**: It generates a new, temporary Google Calendar to serve as a safe sandbox for the script's operations.
2.  **Creates an Event**: It adds a new event for the following day to the temporary calendar.
3.  **Lists and Finds Events**: It retrieves all events for the following day from the temporary calendar to find the event it just created.
4.  **Updates an Event**: It modifies the title and location of the found event.
5.  **Provides Cleanup Instructions**: After the workflow completes, it logs the name of the temporary calendar and provides clear instructions on how to manually delete it, ensuring your Google Calendar account remains clean.

This workflow provides a robust example of how to programmatically manage calendars and events in a controlled manner.
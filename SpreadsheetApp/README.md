# SpreadsheetApp Workflow Example

## Overview

The `SpreadsheetApp` service is one of the most powerful and commonly used services in Google Apps Script. It allows you to create, read, update, and format Google Sheets, enabling a vast range of automation possibilities.

This directory contains a single, comprehensive example script that demonstrates a full, practical workflow, replacing the previous collection of basic, separate files.

---

## `fullSpreadsheetWorkflow.gs`

This script is a self-contained, end-to-end demonstration that requires no manual setup. When you run the `fullSpreadsheetWorkflow` function, it performs the following actions:

1.  **Creates a New Spreadsheet**: It generates a new Google Sheet with a unique name (e.g., "My Automated Report - 10/27/2025").
2.  **Writes Data**: It populates the first sheet with structured data, including a header row and several rows of sample sales records.
3.  **Applies Formatting**: It professionally formats the sheet by:
    *   Making the header bold with a custom background and font color.
    *   Applying currency and date number formats to the appropriate columns.
    *   Automatically resizing columns to fit the content.
4.  **Reads Data**: It reads all the data from the sheet back into the script and logs it, demonstrating data verification.
5.  **Adds a New Sheet**: It creates a second sheet (tab) named "Summary" within the same spreadsheet.
6.  **Logs the URL**: It prints the URL of the newly created spreadsheet to the execution log, so you can easily open it and see the results.

This example serves as a robust starting point for anyone looking to automate tasks with Google Sheets.
# DriveApp Workflow Example

## Overview

The `DriveApp` service is fundamental for interacting with Google Drive. It allows you to programmatically create, find, and modify files and folders, forming the backbone of many organizational and automation scripts.

This directory has been refactored to contain a single, comprehensive example script that demonstrates a practical workflow, replacing the previous set of fragmented, basic examples.

---

## `fullDriveWorkflow.gs`

This script is a self-contained, end-to-end demonstration of file management in Google Drive. It requires no manual setup (like providing folder or file IDs). When you run the `fullDriveWorkflow` function, it performs the following sequence of actions:

1.  **Creates Folders**: It generates a new, uniquely named parent folder and a subfolder within it.
2.  **Creates a File**: It creates a sample text file in the parent folder.
3.  **Lists Contents**: It iterates through the files and folders in the parent directory and logs their names, demonstrating how to list folder contents.
4.  **Moves a File**: It moves the sample text file from the parent folder into the subfolder.
5.  **Verifies the Move**: It lists the contents of the subfolder to confirm the file was moved successfully and checks that the file is no longer in the parent folder.
6.  **Provides Cleanup Instructions**: It logs the URL of the top-level folder it created and provides clear instructions on how to find and delete it, ensuring your Drive stays clean.

This example provides a robust foundation for building more complex file management automations.
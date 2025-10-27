# 📚 Google Apps Script Library Examples

This repository contains comprehensive and enhanced examples of using various Google Apps Script libraries. Each folder now features improved scripts demonstrating practical, real-world usage, complete with detailed explanations, modern JavaScript practices, and robust error handling.

---

## ✨ What's New & Improved

This repository has undergone a significant overhaul to provide more valuable and runnable examples:

-   **Workflow-Oriented Examples**: Many directories (e.g., `SpreadsheetApp`, `DriveApp`, `DocumentApp`, `FormApp`, `CalendarApp`) now feature single, comprehensive workflow scripts. These scripts demonstrate end-to-end processes (e.g., building a full report, managing calendar events, processing email attachments) that are self-contained and require no manual setup or hardcoded IDs.
-   **Enhanced Individual Scripts**: For services where a single workflow wasn't appropriate (e.g., `GmailApp`, `UrlFetchApp`, `ScriptApp`), individual scripts have been significantly improved with:
    *   Detailed JSDoc comments for better understanding.
    *   Modern JavaScript syntax (ES6+).
    *   Robust error handling (`try...catch`).
    *   More practical and illustrative use cases.
    *   Clearer logging and verification steps.
-   **Consolidated Demonstrations**: Services like `Logger` and `PropertiesService` now feature single, well-documented scripts that comprehensively demonstrate all their core functionalities and different scopes.
-   **Clearer `HtmlService` Examples**: The `HtmlService` examples have been refactored into distinct, runnable demonstrations covering web apps, sidebars with data exchange, styled modal dialogs, and embedded charts.

---

## 🚀 Libraries and Examples

| 🔧 **Library**         | 📝 **Description**                                | 🔗 **Examples**                                                           |
|-------------------------|--------------------------------------------------|---------------------------------------------------------------------------|
| 📂 **DriveApp**        | Access and manage Google Drive.                 | [🌐 View Examples](./DriveApp/README.md)                                  |
| 📊 **SpreadsheetApp**  | Manage and interact with Google Sheets.         | [🌐 View Examples](./SpreadsheetApp/README.md)                            |
| 📅 **CalendarApp**     | Interact with Google Calendar.                  | [🌐 View Examples](./CalendarApp/README.md)                               |
| ✉️ **GmailApp**        | Read and send emails with Gmail.                | [🌐 View Examples](./GmailApp/README.md)                                  |
| 🌐 **UrlFetchApp**     | Fetch data from external APIs.                  | [🌐 View Examples](./UrlFetchApp/README.md)                               |
| 🛠️ **Utilities**       | Useful helper methods for data manipulation.    | [🌐 View Examples](./Utilities/README.md)                                 |
| 📋 **FormApp**         | Manage and automate Google Forms.               | [🌐 View Examples](./FormApp/README.md)                                   |
| ⏰ **ScriptApp**       | Manage triggers, OAuth tokens, and project settings.| [🌐 View Examples](./ScriptApp/README.md)                                 |
| 📄 **DocumentApp**     | Create and edit Google Docs programmatically.    | [🌐 View Examples](./DocumentApp/README.md)                               |
| 🎨 **HtmlService**     | Build custom user interfaces using HTML, CSS, and JS.| [🌐 View Examples](./HtmlService/README.md)                               |
| 🪵 **Logger**          | Log information for debugging purposes.          | [🌐 View Examples](./Logger/README.md)                                    |
| 🗄️ **PropertiesService**| Store and retrieve script settings and user data. | [🌐 View Examples](./PropertiesService/README.md)                         |

---

## 🎯 How to Use

1. **Open Google Apps Script**:  
   - Open a Google Workspace app (e.g., Google Sheets, Docs).
   - Navigate to **Extensions > Apps Script**.

2. **Copy the Code**:  
   - Browse the examples in the desired library folder.
   - Copy the code into the Apps Script editor.
   - **Important**: For workflow examples, copy the entire `.gs` file. For `HtmlService` examples, copy both the `.gs` file and the embedded HTML content (if applicable) into separate `.html` files in your Apps Script project, or directly into the `.gs` file as shown in the examples.

3. **Test and Execute**:  
   Customize and run the code in your Google Workspace environment. Ensure you grant any necessary permissions when prompted.

---

## 🤝 Contributing

Contributions are welcome! Whether it's fixing bugs, adding new examples, or improving documentation, feel free to submit a pull request. Please ensure all additions are well-documented and tested.
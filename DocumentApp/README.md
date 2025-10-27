# DocumentApp Workflow: Build a Report

## Overview

The `DocumentApp` service enables the creation and manipulation of Google Docs. It's a powerful tool for automating the generation of reports, letters, and other documents.

This directory has been significantly refactored. It now contains a single, comprehensive workflow script that replaces the previous 11 separate, basic examples. This new approach provides a much more practical and educational demonstration of the service's capabilities.

---

## `buildReportDocument.gs`

This script is a self-contained, end-to-end workflow that builds a professional-looking report document from scratch. It requires no manual setup. When you run the `buildReportDocument` function, it performs the following actions:

1.  **Creates a Document**: It generates a new Google Doc with a unique, timestamped name.
2.  **Adds Structure**: It inserts a header, a footer with page numbers, and a main title.
3.  **Inserts Content**: It appends various types of content, including:
    *   Formatted paragraphs.
    *   A bulleted list.
    *   A formatted table with a header row.
4.  **Manipulates Text**: It demonstrates finding and replacing placeholder text within the document body.
5.  **Adds a Hyperlink**: It finds a specific phrase in the text and turns it into a clickable hyperlink.
6.  **Saves as PDF**: After completing the document, it saves a PDF version to the same Google Drive folder.
7.  **Logs URLs**: It logs the URLs of both the new Google Doc and the generated PDF, allowing you to easily view the results.

This single script serves as a robust example for anyone looking to automate document generation with Google Apps Script.
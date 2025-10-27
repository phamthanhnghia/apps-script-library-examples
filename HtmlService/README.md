# HtmlService Examples & Workflows

## Overview

The `HtmlService` is a powerful Apps Script service that allows you to create custom user interfaces using standard web technologies (HTML, CSS, JavaScript). These interfaces can be displayed as web apps, sidebars, or modal dialogs within Google Workspace applications.

This directory has been refactored to provide a few distinct, comprehensive examples that demonstrate the core functionalities and common patterns of `HtmlService`.

---

## Comprehensive Examples

### 1. `simpleWebApp.gs`

This script demonstrates how to create and serve a basic, standalone Google Apps Script Web App. It shows the `doGet()` function as the entry point and how to return `HtmlOutput` with embedded HTML and CSS. This is your "Hello World" for web apps in Apps Script.

### 2. `sidebarDataExchange.gs`

This example showcases how to build an interactive HTML sidebar for Google Sheets, Docs, or Forms, and crucially, how to enable two-way communication between the client-side JavaScript in the sidebar and the server-side Apps Script code. It covers:
-   Displaying a sidebar.
-   Passing initial data from Apps Script to the HTML.
-   Sending user input from the HTML back to Apps Script.
-   Handling responses from Apps Script in the client.

### 3. `modalDialogWithExternalAssets.gs`

This script demonstrates how to create a modal dialog and enhance its appearance and functionality by including external CSS (e.g., Bootstrap from a CDN) and external JavaScript (e.g., jQuery from a CDN). This is useful for creating more polished and interactive user interfaces.

### 4. `embedCharts.gs`

This script shows how to embed dynamic Google Charts directly into an HTML output displayed as a modal dialog. It demonstrates how to pass data from Apps Script to the client-side JavaScript to render a visualization.

---

These examples provide a solid foundation for building rich and interactive user interfaces with Google Apps Script.
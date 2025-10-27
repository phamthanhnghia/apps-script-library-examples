# UrlFetchApp Examples

## Overview

The `UrlFetchApp` service is the primary way for Google Apps Script to interact with the wider internet. It allows you to make HTTP/HTTPS requests to fetch data from external APIs or send data to them.

The examples in this directory have been enhanced to be more robust, using well-known public APIs for testing and including better error handling.

---

## `fetchData.gs`

This script demonstrates how to make a `GET` request to a public API ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)) and parse the JSON response. It has been improved to include:
-   The `muteHttpExceptions` option to gracefully handle non-200 responses.
-   Clear logging of the HTTP response code.
-   Error handling with a `try...catch` block.

## `sendData.gs`

This script shows how to make a `POST` request with a JSON payload. It now uses [httpbin.org](https://httpbin.org/post), a service that echoes the request data, allowing you to verify that your payload was sent and received correctly. The improvements include:
-   Clear demonstration of `JSON.stringify` for the payload.
-   Parsing the response from httpbin to confirm the sent data.
-   `muteHttpExceptions` and response code checking.

## `fetchImage.gs`

This script demonstrates how to fetch a binary file, such as an image, and save it to Google Drive. It has been enhanced to:
-   Use a reliable placeholder image service.
-   Programmatically find or create a specific folder in Google Drive to store the image.
-   Provide a more complete and practical workflow.
# Utilities Service & Common Functions

## Overview

This directory contains examples for the `Utilities` service, along with other common utility functions that are essential for many Apps Script projects. These scripts demonstrate best practices for data manipulation, encoding, and other foundational tasks.

While some of these functions are part of the `Utilities` service, others are standard JavaScript features (`JSON`, `Math.random`, RegExp) that are crucial for any developer to know.

**Key Use Cases:**
- Encoding and decoding data for API interactions (Base64).
- Hashing data for integrity checks or security purposes (MD5, SHA-256).
- Formatting dates and times for display or logging.
- Pausing script execution to handle rate limits.
- Creating and unpacking zip archives.
- Generating unique IDs for resources.
- Parsing and creating JSON data.
- Validating data formats like email addresses.

---

## Improved Examples

The scripts in this directory have been significantly improved to be more practical, self-contained, and educational. They now use modern JavaScript (ES6+) and include detailed comments.

### 1. `base64Encoding.gs`
Demonstrates both standard and web-safe Base64 encoding and decoding. Essential for working with binary data or certain APIs.

### 2. `formatTimestamps.gs`
Shows how to format `Date` objects into various string formats and how to handle time zones correctly.

### 3. `generateUUID.gs`
Explains what a UUID is and provides a practical example of using `Utilities.getUuid()` to generate a unique ID for a new Google Doc.

### 4. `hashString.gs`
Provides a clear example of computing various cryptographic hashes (MD5, SHA-256, SHA-512) and explains their common use cases.

### 5. `mimeEmail.gs`
This script was completely rewritten to correct the original, misleading example. It now demonstrates the **correct, practical way** to send a multipart (MIME) email by using the `GmailApp` service with an `htmlBody`, which automatically handles the underlying MIME structure.

### 6. `parseJson.gs`
A comprehensive example showing how to both parse a JSON string into an object (`JSON.parse`) and stringify an object into a JSON string (`JSON.stringify`), including pretty-printing.

### 7. `randomNumbers.gs`
Features a reusable helper function for generating a random integer within a given range and shows practical examples like simulating a die roll or picking a random item from an array.

### 8. `sleepScript.gs`
Explains when and why to use `Utilities.sleep()`, provides a realistic example of pausing within a loop, and includes an important warning about script execution time quotas.

### 9. `validateEmail.gs`
Offers a reusable function for validating the format of an email address using regular expressions, complete with several test cases and notes on its limitations.

### 10. `zipFiles.gs`
A powerful, self-contained example that programmatically creates a folder and files, zips them, unzips them to verify the contents, and provides instructions for cleanup. It requires no manual setup.
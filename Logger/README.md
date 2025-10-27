# Logger Service Examples

## Overview

The `Logger` service in Google Apps Script is an essential tool for development and debugging. It allows you to record text-based logs that you can view in the Apps Script editor after your script runs. This is invaluable for understanding the flow of your script, tracking variable values, and diagnosing errors.

Logs are cleared after each execution but can be preserved in services like Google Sheets or external logging systems for long-term analysis.

**Key Use Cases:**
- **Debugging:** Print variable values at different stages of execution.
- **Tracing:** Follow the execution path of your script, especially in loops and conditional blocks.
- **Error Reporting:** Catch and log detailed error information, including stack traces.
- **Performance Monitoring:** Measure the time taken by specific operations to identify bottlenecks.

---

## Improved Examples

The scripts in this directory have been updated to demonstrate best practices and modern JavaScript syntax (ES6+).

### 1. `logSimpleMessage.gs`
Demonstrates the most basic logging functionality: writing a simple string to the log.

### 2. `logVariables.gs`
Shows various methods for logging variables, including modern template literals for better readability.

### 3. `logArraysAndObjects.gs`
Illustrates how to log arrays and objects directly. The Apps Script logger provides a convenient, interactive dropdown to inspect their contents, so you don't need to use `JSON.stringify()`.

### 4. `logErrors.gs`
Provides a robust example of using a `try...catch` block to capture and log errors. It shows how to log the full error object to get a stack trace, which is crucial for debugging.

### 5. `logExecutionTime.gs`
Shows how to measure the execution time of a piece of code, helping to identify slow or inefficient operations.

### 6. `logNestedLoops.gs`
A straightforward example of logging inside nested loops to trace the execution flow.

### 7. `clearLog.gs`
Demonstrates how to use `Logger.clear()` to erase all log entries from the current script's execution log. This is useful for ensuring a clean slate before a new set of logging operations.
# PropertiesService Demonstration

## Overview

The `PropertiesService` is a crucial service for storing simple string data in key-value pairs that persist between script executions. It's the standard way to manage script configuration, user preferences, or document-specific metadata without using a database or a spreadsheet.

This directory has been refactored to use a single, comprehensive script, `propertiesServiceDemo.gs`, which replaces the previous seven separate examples.

---

## Scopes of Properties

The `PropertiesService` provides three distinct scopes for storing data:

1.  **Script Properties**: Data is accessible to all users of the script. Ideal for script-wide settings, such as an application version or a non-sensitive API key.
2.  **User Properties**: Data is private to the user running the script. Each user has their own set of properties. Perfect for storing user-specific settings like a preferred theme or language.
3.  **Document Properties**: Data is tied to the specific Google Doc, Sheet, or Form that the script is bound to. Useful for storing metadata about that particular file, like a version number or the last editor.

---

## `propertiesServiceDemo.gs`

This single script provides a clear, runnable demonstration of all three property scopes. When you run the `demonstratePropertiesService` function, it will:

1.  **Demonstrate Script Properties**: Set, retrieve, list, and delete properties shared by all users of the script.
2.  **Demonstrate User Properties**: Set, retrieve, list, and delete properties private to the current user.
3.  **Demonstrate Document Properties**: If the script is bound to a document, it will set, retrieve, list, and delete properties specific to that document.
4.  **Include a Helper Function**: A `logProperties` utility is included to make it easy to view all keys and values in a given property store.

This consolidated example provides a robust overview of how to effectively use `PropertiesService` in your projects.
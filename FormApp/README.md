# FormApp Workflow: Build a Quiz

## Overview

The `FormApp` service provides powerful tools to create, modify, and manage Google Forms programmatically. This allows for the automation of surveys, quizzes, data entry forms, and more.

This directory has been refactored into a single, comprehensive workflow script. This new `buildQuizFormWorkflow.gs` script replaces the previous 10 separate examples, providing a more practical and cohesive demonstration of what `FormApp` can do.

---

## `buildQuizFormWorkflow.gs`

This script is a self-contained, end-to-end workflow that builds a complete, functional quiz from scratch, requiring no manual setup. Running the `buildQuizFormWorkflow` function will:

1.  **Create a Form**: It generates a new Google Form and configures it to function as a quiz.
2.  **Add Questions**: It adds multiple types of questions, including:
    *   A required short-answer question.
    *   A multiple-choice question with points, feedback, and a correct answer defined.
    *   A checkbox question with multiple correct answers.
3.  **Manage Questions**: It demonstrates how to iterate through all questions in the form and how to programmatically delete a question.
4.  **Configure Settings**: It sets the form to automatically collect user emails and sets up an email notification for the owner upon every new submission.
5.  **Link to a Spreadsheet**: It automatically creates a new Google Sheet and sets it as the destination for all form responses.
6.  **Activate the Form**: It opens the form to begin accepting responses.
7.  **Log URLs**: It logs the public URL for users to take the quiz and the editor URL for easy management.

This single script is a robust starting point for automating the creation and management of Google Forms.
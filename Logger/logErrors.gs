/**
 * @description Demonstrates how to properly log errors using a try-catch block.
 * Logging the full error object provides more context, including the stack trace.
 */
function logErrors() {
  try {
    // Let's create a situation that will cause an error.
    const data = { user: null };
    // This will throw a TypeError because you can't access properties of null.
    const userName = data.user.name;
    
    Logger.log(`This message will not be logged: ${userName}`);

  } catch (error) {
    // Log the error message for a quick overview.
    Logger.log(`An error occurred: ${error.message}`);

    // Log the full error object to get the stack trace for detailed debugging.
    // The stack trace shows the exact line where the error happened.
    Logger.log('Full error details:');
    Logger.log(error);
  }
}
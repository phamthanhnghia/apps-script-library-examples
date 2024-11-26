// This script demonstrates logging errors
function logErrors() {
  try {
    var result = 10 / 0; // Attempt division by zero
  } catch (error) {
    Logger.log('An error occurred: %s', error.message); // Logs the error message
  }
}

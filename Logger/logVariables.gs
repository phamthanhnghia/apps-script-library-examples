/**
 * @description Demonstrates logging variables to the Apps Script logger.
 * This is useful for debugging and tracking the state of variables during execution.
 * @see https://developers.google.com/apps-script/reference/base/logger#log(Object...)
 */
function logVariables() {
  const userName = 'Jane Doe';
  const userAge = 28;
  const userRole = 'Developer';

  // Method 1: Using string concatenation (traditional)
  Logger.log('User info (concatenated): ' + userName + ', Age: ' + userAge + ', Role: ' + userRole);

  // Method 2: Using template literals (ES6 - more readable)
  Logger.log(`User info (template literal): ${userName}, Age: ${userAge}, Role: ${userRole}`);

  // Method 3: Passing multiple arguments to Logger.log()
  // The logger will automatically add a space between each argument.
  Logger.log('User info (multiple args):', userName, 'Age:', userAge, 'Role:', userRole);
}
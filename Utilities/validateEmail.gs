/**
 * @description This script demonstrates how to validate an email address format using Regular Expressions (RegExp).
 *
 * Note: This uses standard JavaScript RegExp and is not a function of the `Utilities` service.
 * It's a common utility function needed in many applications.
 */

/**
 * Validates if a string has the basic format of an email address.
 *
 * Note: This regex is for basic format validation and does not guarantee the email address
 * is real or deliverable. A truly comprehensive email regex is extremely complex.
 * This pattern is generally sufficient for form validation.
 *
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email has a valid format, false otherwise.
 */
function isEmailFormatValid(email) {
  if (typeof email !== 'string') {
    return false;
  }
  // A common and reasonably effective regex for email validation.
  const emailPattern = /^[^@S]+@[^@S]+\.[^@S]+$/;
  return emailPattern.test(email);
}

/**
 * @description Demonstrates the email validation function with test cases.
 */
function demonstrateEmailValidation() {
  const emailsToTest = [
    'test.user@example.com',   // Valid
    'user+alias@gmail.com',    // Valid
    'invalid-email',           // Invalid
    'user@domain',             // Invalid (no .com/.net/etc.)
    'user@.com',               // Invalid
    'user @ domain.com'        // Invalid (contains spaces)
  ];

  emailsToTest.forEach(email => {
    const isValid = isEmailFormatValid(email);
    Logger.log(`'${email}' has a valid format: ${isValid}`);
  });
}
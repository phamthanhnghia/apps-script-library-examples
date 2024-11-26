// Validate email address format using regex
function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isValid = emailPattern.test(email);
  Logger.log(email + " is valid: " + isValid);
}

// Example Usage
function testEmailValidation() {
  validateEmail("example@domain.com");
  validateEmail("invalid-email");
}

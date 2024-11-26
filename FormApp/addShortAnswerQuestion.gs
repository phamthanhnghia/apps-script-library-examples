// This script adds a short-answer question to an existing form
function addShortAnswerQuestion() {
  // Open an existing form by its ID
  var form = FormApp.openById('your-form-id');
  
  // Add a text item (short answer question)
  form.addTextItem().setTitle('What is your name?');
  
  Logger.log('Short-answer question added.');
}

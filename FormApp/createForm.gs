// This script creates a new Google Form and adds a multiple-choice question
function createForm() {
  // Create a new form with a given title
  var form = FormApp.create('Customer Feedback Survey');
  
  // Add a multiple-choice question
  form.addMultipleChoiceItem()
      .setTitle('How did you hear about us?')
      .setChoiceValues(['Online Ads', 'Friend', 'Other']);
  
  // Log the form's edit URL
  Logger.log('Form created! Edit URL: ' + form.getEditUrl());
}

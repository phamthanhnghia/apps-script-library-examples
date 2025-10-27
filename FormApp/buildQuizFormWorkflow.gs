/**
 * @description This script demonstrates a complete workflow for creating and configuring a Google Form quiz.
 * It combines many common FormApp features into a single, practical, and runnable example.
 */
function buildQuizFormWorkflow() {
  try {
    // --- 1. Create a New Form and Configure as a Quiz ---
    const form = FormApp.create('Apps Script Pop Quiz');
    form.setDescription('A short quiz to test your Google Apps Script knowledge.');
    form.setIsQuiz(true);
    Logger.log(`Created new form: "${form.getTitle()}"`);
    Logger.log(`Edit URL: ${form.getEditUrl()}`);

    // --- 2. Add Various Question Types ---
    Logger.log('Adding questions to the form...');
    
    // Short Answer Question
    const nameQuestion = form.addTextItem();
    nameQuestion.setTitle('What is your name?').setRequired(true);

    // Multiple Choice Question with Feedback
    const mcQuestion = form.addMultipleChoiceItem();
    mcQuestion.setTitle('Which service is used to interact with Google Sheets?')
      .setChoices([
        mcQuestion.createChoice('DriveApp'),
        mcQuestion.createChoice('SpreadsheetApp'),
        mcQuestion.createChoice('GmailApp')
      ])
      .setPoints(10)
      .setRequired(true);
    // Set the correct answer and feedback
    const mcFeedback = FormApp.createFeedback().setText('SpreadsheetApp is the correct service for Google Sheets.').build();
    mcQuestion.setFeedbackForCorrect(mcFeedback);
    mcQuestion.setChoices(mcQuestion.getChoices().map(c => c.getValue() === 'SpreadsheetApp' ? c.setCorrect(true) : c));

    // Checkbox Question
    const cbQuestion = form.addCheckboxItem();
    cbQuestion.setTitle('Which of the following are valid Apps Script services? (Select all that apply)')
      .setChoices([
        cbQuestion.createChoice('DocumentApp', true),
        cbQuestion.createChoice('FormApp', true),
        cbQuestion.createChoice('NotionApp', false),
        cbQuestion.createChoice('CalendarApp', true)
      ])
      .setPoints(10)
      .setRequired(true);

    // --- 3. List and Delete a Question ---
    Logger.log('\nListing all form items:');
    form.getItems().forEach(item => Logger.log(`- ${item.getTitle()} (Type: ${item.getType()})`));
    
    const tempQuestion = form.addTextItem().setTitle('This question will be deleted.');
    Logger.log(`\nAdded temporary question: "${tempQuestion.getTitle()}"`);
    form.deleteItem(tempQuestion);
    Logger.log('Temporary question has been deleted.');

    // --- 4. Configure Form Settings ---
    Logger.log('\nConfiguring form settings...');
    // Set the form to automatically collect email addresses
    form.setCollectEmail(true);
    
    // Set an email notification for the form owner on each submission
    form.setDestination(FormApp.DestinationType.EMAIL, Session.getActiveUser().getEmail());
    Logger.log(`Email notifications will be sent to ${Session.getActiveUser().getEmail()}`);

    // --- 5. Link to a Response Spreadsheet ---
    const spreadsheet = SpreadsheetApp.create(`Quiz Responses - ${form.getTitle()}`);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
    Logger.log(`Responses will be collected in Google Sheet: ${spreadsheet.getUrl()}`);

    // --- 6. Open the Form for Responses ---
    form.setAcceptingResponses(true);
    Logger.log('The form is now open and accepting responses.');
    Logger.log(`\nPublic URL to take the quiz: ${form.getPublishedUrl()}`);
    
    Logger.log('\nWorkflow complete!');

  } catch (e) {
    Logger.log(`An error occurred: ${e.toString()}`);
    Logger.log(`Stack: ${e.stack}`);
  }
}

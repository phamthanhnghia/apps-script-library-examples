function exportResponsesToSheet() {
  var form = FormApp.openById('your-form-id');
  var sheet = SpreadsheetApp.create('Form Responses');
  var responses = form.getResponses();
  
  responses.forEach(response => {
    sheet.appendRow(response.getItemResponses().map(r => r.getResponse()));
  });
}

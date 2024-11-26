function getFormResponses() {
  var form = FormApp.openById('your-form-id');
  var responses = form.getResponses();
  responses.forEach(response => Logger.log(response.getItemResponses().map(r => r.getResponse())));
}

function listQuestions() {
  var form = FormApp.openById('your-form-id');
  var items = form.getItems();
  items.forEach(item => Logger.log(item.getTitle()));
}

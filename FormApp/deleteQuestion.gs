function deleteQuestion() {
  var form = FormApp.openById('your-form-id');
  var items = form.getItems();
  form.deleteItem(items[0]);
}

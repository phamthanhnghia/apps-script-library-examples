function enableEmailNotifications() {
  var form = FormApp.openById('your-form-id');
  form.setDestination(FormApp.DestinationType.EMAIL, Session.getActiveUser().getEmail());
}

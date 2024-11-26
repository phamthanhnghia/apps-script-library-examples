function addCheckboxQuestion() {
  var form = FormApp.openById('your-form-id');
  form.addCheckboxItem().setTitle('Select your hobbies')
      .setChoiceValues(['Reading', 'Traveling', 'Gaming']);
}

/**
 * Create a trigger that activates when a Google Sheet is edited.
 */
function createEditTrigger() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.newTrigger('onEditFunction')
    .forSpreadsheet(ss)
    .onEdit()
    .create();
}

/**
 * Function to be triggered on edit.
 */
function onEditFunction(e) {
  Logger.log('Edited cell: ' + e.range.getA1Notation());
}
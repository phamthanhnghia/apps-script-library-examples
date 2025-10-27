/**
 * @description This script provides a comprehensive demonstration of managing triggers in Apps Script.
 * It shows how to create, list, and delete various types of triggers programmatically.
 */

// --- Functions to be Called by Triggers ---

/** A sample function that a time-based trigger can call. */
function logCurrentTime() {
  Logger.log(`Time-based trigger executed at: ${new Date().toLocaleTimeString()}`);
}

/** A sample function that an on-edit trigger can call. */
function logEditEvent(e) {
  if (!e) {
    Logger.log('This function is meant to be run by an on-edit trigger and requires an event object.');
    return;
  }
  Logger.log(`Spreadsheet edited. Range: ${e.range.getA1Notation()}. New value: "${e.value}"`);
}


// --- Trigger Management Functions ---

/**
 * Creates several different types of triggers.
 */
function createTriggers() {
  // First, delete any existing triggers for these functions to avoid duplicates.
  deleteTriggersByHandler('logCurrentTime');
  deleteTriggersByHandler('logEditEvent');
  
  // 1. Create a time-based trigger that runs every 5 minutes.
  ScriptApp.newTrigger('logCurrentTime')
    .timeBased()
    .everyMinutes(5)
    .create();
  Logger.log('Created a time-based trigger to run "logCurrentTime" every 5 minutes.');

  // 2. Create a trigger that runs at a specific time (e.g., 2 hours from now).
  const specificTime = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
  ScriptApp.newTrigger('logCurrentTime')
    .timeBased()
    .at(specificTime)
    .create();
  Logger.log(`Created a one-time trigger to run "logCurrentTime" at ${specificTime.toLocaleTimeString()}.`);

  // 3. Create an on-edit trigger for the active spreadsheet.
  // This requires the script to be bound to a Google Sheet.
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) {
      ScriptApp.newTrigger('logEditEvent')
        .forSpreadsheet(ss)
        .onEdit()
        .create();
      Logger.log('Created an on-edit trigger for the active spreadsheet.');
    } else {
      Logger.log('Skipping on-edit trigger creation (script is not bound to a spreadsheet).');
    }
  } catch (e) {
    Logger.log(`Could not create on-edit trigger. Error: ${e.message}`);
  }
}

/**
 * Lists all triggers currently associated with the script project.
 */
function listAllTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  if (triggers.length === 0) {
    Logger.log('No triggers are currently set for this project.');
    return;
  }
  
  Logger.log(`Found ${triggers.length} trigger(s):`);
  triggers.forEach(trigger => {
    Logger.log(`- Handler: ${trigger.getHandlerFunction()}, Type: ${trigger.getEventType()}, ID: ${trigger.getUniqueId()}`);
  });
}

/**
 * Deletes all triggers for a specific handler function.
 * @param {string} functionName The name of the function whose triggers should be deleted.
 */
function deleteTriggersByHandler(functionName) {
  let deletedCount = 0;
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (trigger.getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(trigger);
      deletedCount++;
    }
  });
  if (deletedCount > 0) {
    Logger.log(`Deleted ${deletedCount} trigger(s) for handler "${functionName}".`);
  }
}

/**
 * Deletes all triggers in the project. Use with caution.
 */
function deleteAllTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  if (triggers.length === 0) {
    Logger.log('No triggers to delete.');
    return;
  }
  
  triggers.forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  Logger.log(`Successfully deleted all ${triggers.length} triggers.`);
}

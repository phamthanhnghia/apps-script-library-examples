// This script creates a time-based trigger that runs a function every 5 minutes
function createTimeTrigger() {
  // Create a time-based trigger for the function 'myFunction'
  ScriptApp.newTrigger('myFunction')
           .timeBased()
           .everyMinutes(5) // Runs every 5 minutes
           .create();
  
  Logger.log('Time-based trigger created for myFunction.');
}

// Example function to demonstrate the trigger
function myFunction() {
  Logger.log('Trigger executed!');
}

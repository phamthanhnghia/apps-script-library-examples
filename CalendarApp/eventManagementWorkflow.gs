/**
 * @description This script demonstrates a complete workflow for managing Google Calendar.
 * It creates a new, temporary calendar and then creates, lists, and updates an event within it,
 * providing a safe and runnable example.
 */
function eventManagementWorkflow() {
  let tempCalendar = null;
  try {
    // --- 1. Create a Temporary Calendar ---
    // This is safer than cluttering the user's default calendar.
    const calendarName = `Apps Script Demo Calendar - ${new Date().getTime()}`;
    tempCalendar = CalendarApp.createCalendar(calendarName);
    Logger.log(`Created temporary calendar: "${calendarName}" (ID: ${tempCalendar.getId()})`);

    // --- 2. Create a New Event ---
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const startTime = new Date(tomorrow.setHours(10, 0, 0)); // 10:00 AM tomorrow
    const endTime = new Date(tomorrow.setHours(11, 0, 0));   // 11:00 AM tomorrow

    const newEvent = tempCalendar.createEvent(
      'Project Kick-off',
      startTime,
      endTime,
      {
        location: 'Virtual',
        description: 'Initial meeting to discuss project goals.'
      }
    );
    Logger.log(`Created event: "${newEvent.getTitle()}" with ID: ${newEvent.getId()}`);

    // --- 3. List and Find the Event ---
    Logger.log(`\nListing events for ${tomorrow.toLocaleDateString()}...`);
    const events = tempCalendar.getEventsForDay(tomorrow);
    if (events.length > 0) {
      const eventToUpdate = events[0]; // We know it's our event
      Logger.log(`Found event to update: "${eventToUpdate.getTitle()}"`);

      // --- 4. Update the Event ---
      eventToUpdate.setTitle('Project Kick-off (Updated)');
      eventToUpdate.setLocation('Google Meet');
      Logger.log(`Event updated. New title: "${eventToUpdate.getTitle()}", New location: "${eventToUpdate.getLocation()}"`);
    } else {
      Logger.log('Could not find the event to update.');
    }

  } catch (e) {
    Logger.log(`An error occurred: ${e.toString()}`);
    Logger.log(`Stack: ${e.stack}`);
  } finally {
    // --- 5. Cleanup Instructions ---
    if (tempCalendar) {
      Logger.log('\nWorkflow complete.');
      Logger.log(`To clean up, manually delete the calendar named "${tempCalendar.getName()}" from your Google Calendar settings.`);
      // For automatic cleanup, you could use: tempCalendar.deleteCalendar();
      // Note: Deleting calendars programmatically is permanent and cannot be undone.
    }
  }
}

// This script updates an existing event in the user's primary calendar
function updateCalendarEvent() {
  var calendar = CalendarApp.getDefaultCalendar();
  var events = calendar.getEventsForDay(new Date(2024, 10, 30));
  
  if (events.length > 0) {
    var event = events[0]; // Select the first event
    event.setTitle("Updated Team Meeting");
    event.setDescription("Updated details for the team meeting.");
    Logger.log("Event updated: " + event.getTitle());
  } else {
    Logger.log("No events found for the specified date.");
  }
}

// This script creates a new event on the user's primary calendar
function createCalendarEvent() {
  var calendar = CalendarApp.getDefaultCalendar();
  var event = calendar.createEvent(
    "Team Meeting", // Event title
    new Date(2024, 10, 30, 10, 0), // Start date (YYYY, MM-1, DD, HH, MM)
    new Date(2024, 10, 30, 11, 0), // End date
    { description: "Discuss project updates", location: "Meeting Room 1" }
  );
  Logger.log("Event created: " + event.getTitle());
}

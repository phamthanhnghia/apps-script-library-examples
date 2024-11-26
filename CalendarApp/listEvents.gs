// This script lists all events in a specific date range
function listCalendarEvents() {
  var calendar = CalendarApp.getDefaultCalendar();
  var startDate = new Date(2024, 10, 25); // Start date
  var endDate = new Date(2024, 10, 30);   // End date
  var events = calendar.getEvents(startDate, endDate);
  
  events.forEach(function(event) {
    Logger.log("Event: " + event.getTitle() + ", Start: " + event.getStartTime());
  });
}

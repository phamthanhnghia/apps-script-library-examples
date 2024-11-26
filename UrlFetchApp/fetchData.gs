// This script fetches data from a public API
function fetchData() {
  var url = "https://jsonplaceholder.typicode.com/posts/1"; // Example API
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  Logger.log("Title: " + data.title);
}

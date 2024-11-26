// This script sends a POST request to an API with JSON payload
function sendData() {
  var url = "https://jsonplaceholder.typicode.com/posts";
  var payload = {
    title: "foo",
    body: "bar",
    userId: 1
  };
  
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  var response = UrlFetchApp.fetch(url, options);
  Logger.log("Response: " + response.getContentText());
}

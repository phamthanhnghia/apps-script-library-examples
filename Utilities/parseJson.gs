// Parse and work with JSON data
function parseJson() {
  var jsonString = '{"name":"John Doe","email":"john.doe@example.com","age":30}';
  var jsonObject = JSON.parse(jsonString);
  
  Logger.log("Name: " + jsonObject.name);
  Logger.log("Email: " + jsonObject.email);
  Logger.log("Age: " + jsonObject.age);
}

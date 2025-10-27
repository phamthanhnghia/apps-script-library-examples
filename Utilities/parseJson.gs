/**
 * @description Demonstrates how to parse JSON strings into JavaScript objects (`JSON.parse`)
 * and serialize JavaScript objects into JSON strings (`JSON.stringify`).
 *
 * Note: These are standard JavaScript functions, not part of the `Utilities` service.
 * They are fundamental for working with data from APIs.
 */
function demonstrateJsonParsing() {
  // --- Parsing a JSON string to an object ---
  const jsonString = `
    {
      "id": 101,
      "user": "alice",
      "isActive": true,
      "roles": ["viewer", "editor"],
      "lastLogin": "2025-10-27T10:00:00Z"
    }
  `;

  try {
    const dataObject = JSON.parse(jsonString);
    Logger.log('Successfully parsed JSON string:');
    Logger.log(dataObject);
    Logger.log(`Accessing a property: dataObject.user = ${dataObject.user}`);
  } catch (e) {
    Logger.log(`Failed to parse JSON string. Error: ${e.message}`);
  }
  
  Logger.log('---');

  // --- Stringifying a JavaScript object to a JSON string ---
  const userObject = {
    name: 'Bob',
    email: 'bob@example.com',
    permissions: {
      read: true,
      write: false
    },
    projects: [
      { id: 1, name: 'Project A' },
      { id: 2, name: 'Project B' }
    ]
  };

  // `null, 2` is for pretty-printing the JSON with an indent of 2 spaces.
  const prettyJsonString = JSON.stringify(userObject, null, 2);
  Logger.log('Stringified object (pretty-printed):');
  Logger.log(prettyJsonString);
  
  const compactJsonString = JSON.stringify(userObject);
  Logger.log(`Stringified object (compact): ${compactJsonString}`);
}